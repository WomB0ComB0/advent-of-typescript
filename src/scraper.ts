import * as cheerio from 'cheerio';
import { mkdir, writeFile, rm } from 'fs/promises';
import path from 'path';
import puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';

interface Challenge {
  description: string;
  code: string;
  tests: string;
}

class ScraperError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ScraperError';
  }
}

async function extractChallenge(html: string): Promise<Challenge> {
  try {
    const $ = cheerio.load(html);
    
    const description = $('.prose-invert')
      .children()
      .map((_, el) => $(el).text().trim())
      .get()
      .join('\n\n')
      .trim();

    if (!description) {
      throw new ScraperError('No description found');
    }
    
    const codeElements = $('.view-line')
      .map((_, el) => $(el).text().trim())
      .get()
      .filter(text => text.length > 0);

    if (codeElements.length < 2) {
      throw new ScraperError('Insufficient code elements found');
    }
    
    return {
      description,
      code: codeElements[0],
      tests: codeElements.slice(1).join('\n')
    };
  } catch (error) {
    console.error('Challenge extraction failed:', error);
    throw error;
  }
}

async function fetchChallengeWithPuppeteer(year: number, day: number): Promise<Challenge> {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });
  const page = await browser.newPage();
  
  try {
    const url = `https://www.adventofts.com/events/${year}/${day}`;
    console.log(`Navigating to: ${url}`);
    
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
    const content = await page.content();
    console.log('Page content:', content.substring(0, 200) + '...');

    const description = await page.waitForSelector('.prose-invert, [data-testid="challenge-description"]', {
      timeout: 10000
    });

    if (!description) {
      throw new Error('Could not find challenge description');
    }

    const html = await page.content();
    const challenge = await extractChallenge(html);
    await page.close();
    return challenge;
  } catch (error) {
    console.error('Error during page fetch:', error);
    await page.screenshot({ path: 'error-screenshot.png' });
    throw error;
  } finally {
    await browser.close();
  }
}

async function saveChallenge(year: number, day: number, content: Challenge) {
  try {
    const baseDir = path.join(process.cwd(), year.toString(), day.toString());
    
    try { await rm(baseDir, { recursive: true, force: true }) } catch {} finally { console.log(`Deleted directory ${baseDir}`) }

    await mkdir(baseDir, { recursive: true, mode: 0o755 });

    const questionContent = [
      `# Advent of TypeScript ${year} - Day ${day}`,
      '',
      content.description,
      '',
      '## Initial Code',
      '```typescript',
      content.code,
      '```',
      '',
      '## Tests',
      '```typescript',
      content.tests,
      '```'
    ].join('\n');
    
    const tsConfig = {
      "extends": "../../tsconfig.json",
      "compilerOptions": {
        "verbatimModuleSyntax": true,
        "noEmit": true,
        "paths": {
          "*": ["./*"]
        }
      },
      "include": [
        "question.d.ts",
        "tests.ts"
      ]
    };

    await Promise.all([
      writeFile(path.join(baseDir, 'question.md'), questionContent, { mode: 0o644 }),
      writeFile(path.join(baseDir, 'question.d.ts'), content.code, { mode: 0o644 }),
      writeFile(path.join(baseDir, 'tests.ts'), content.tests, { mode: 0o644 }),
      writeFile(path.join(baseDir, 'tsconfig.json'), JSON.stringify(tsConfig, null, 2), { mode: 0o644 })
    ]);
    
    console.log(`Challenge for day ${day} saved successfully`);
  } catch (error) {
    console.error('Challenge save failed:', error);
    throw error;
  }
}

async function main() {
  try {
    const args = Bun.argv.slice(2);
    
    if (args.length !== 2) {
      throw new ScraperError('Usage: bun run scraper.ts <year> <day>');
    }

    const year = Number(args[0]);
    const day = Number(args[1]);

    if (isNaN(year) || isNaN(day) || day < 1 || day > 25) {
      throw new ScraperError('Year must be a number, day must be between 1 and 25');
    }

    const challenge = await fetchChallengeWithPuppeteer(year, day);
    await saveChallenge(year, day, challenge);
    
    console.log(`Successfully processed challenge for ${year}/day${day}`);
  } catch (error) {
    console.error('Scraper execution failed:', error);
    process.exit(1);
  }
}

export { fetchChallengeWithPuppeteer, extractChallenge, saveChallenge };

console.log('Starting scraper...');
main().catch(console.error);
