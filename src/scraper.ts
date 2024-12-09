/**
 * @fileoverview Scraper utility for fetching TypeScript challenges from Advent of TypeScript website.
 * Handles fetching, parsing, and saving challenge content to the filesystem.
 * @module scraper
 * @requires path
 * @requires bun
 * @requires cheerio
 * @requires fs/promises
 * @requires puppeteer
 */

import path from 'path';
import * as cheerio from 'cheerio';
import { mkdir, rm, writeFile } from 'fs/promises';
import puppeteer from 'puppeteer';

declare global {
  interface Window {
    /** Monaco editor instance available on the challenge page */
    monaco: any;
  }
}

/**
 * Represents a single TypeScript challenge with its components
 * @interface Challenge
 * @property {string} description - The challenge description text in markdown format
 * @property {string} code - The initial TypeScript code/type definitions for the challenge
 * @property {string} tests - The test cases validating the challenge solution
 */
interface Challenge {
  description: string;
  code: string;
  tests: string;
}

/**
 * Custom error class for scraper-specific errors
 * @class ScraperError
 * @extends {Error}
 * @property {string} name - Always set to 'ScraperError'
 * @property {string} message - The error message describing what went wrong
 */
class ScraperError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ScraperError';
  }
}

/**
 * Extracts challenge content from HTML using Cheerio
 * @async
 * @param {string} html - Raw HTML content from the challenge page
 * @returns {Promise<Challenge>} Parsed challenge content with description, code and tests
 * @throws {ScraperError} If required content sections cannot be found in the HTML
 * @throws {Error} If HTML parsing or content extraction fails
 */
async function extractChallenge(html: string): Promise<Challenge> {
  try {
    const $ = cheerio.load(html);

    const description = $('[data-testid="challenge-description"], .prose-invert')
      .text()
      .trim()
      .replace(/\n+/g, '\n\n');

    if (!description) {
      throw new ScraperError('No description found');
    }

    const allLines = $('.view-line')
      .map((_, line) => {
        const spans = $(line).find('span span');
        return spans
          .map((_, span) => $(span).text())
          .get()
          .join('');
      })
      .get();

    console.log('All lines:', allLines);

    let separationIndex = allLines.findIndex((line) => line.includes('type test'));
    if (separationIndex === -1) {
      const firstContentIndex = allLines.findIndex((line) => line.trim().length > 0);
      const firstEmptyAfterContent = allLines.findIndex(
        (line, i) => i > firstContentIndex && line.trim().length === 0,
      );
      separationIndex =
        firstEmptyAfterContent !== -1 ? firstEmptyAfterContent : Math.floor(allLines.length / 2);
    }

    const code = allLines.slice(0, separationIndex).join('\n').trim();
    const tests = allLines.slice(separationIndex).join('\n').trim();
    console.log('Tests:', tests);
    if (!code || !tests) {
      console.log('Debug info:', {
        totalLines: allLines.length,
        separationIndex,
        codeLength: code?.length,
        testsLength: tests?.length,
        firstFewLines: allLines.slice(0, 3),
      });
      throw new ScraperError(
        `Missing content - Code length: ${code?.length}, Tests length: ${tests?.length}. Found ${allLines.length} lines.`,
      );
    }

    return {
      description,
      code,
      tests,
    };
  } catch (error) {
    console.error('Challenge extraction failed:', error);
    throw error;
  }
}

const cleanContent = (content: string) =>
  content
    .replace(/\r\n/g, '\n')
    .replace(/\u200B/g, '')
    .replace(/\u200C/g, '')
    .replace(/\u200D/g, '')
    .replace(/\uFEFF/g, '')
    .replace(/\u00A0/g, ' ')
    .replace(/(['"])\1:/g, '$1:')
    .trim();

/**
 * Fetches challenge content using Puppeteer headless browser
 * @async
 * @param {number} year - The challenge year (e.g. 2023, 2024)
 * @param {number} day - The challenge day number (1-25)
 * @returns {Promise<Challenge>} The fetched challenge content including description, code and tests
 * @throws {Error} If page navigation fails, required elements cannot be found, or content extraction fails
 * @throws {ScraperError} If challenge content is invalid or missing required sections
 */
async function fetchChallengeWithPuppeteer(year: number, day: number): Promise<Challenge> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: {
      width: 3840,
      height: 2160,
      deviceScaleFactor: 1,
    },
  });
  const page = await browser.newPage();

  try {
    const url = `https://www.adventofts.com/events/${year}/${day}`;
    await page.goto(url, {
      waitUntil: ['networkidle0', 'domcontentloaded', 'load'],
      timeout: 30000,
    });

    await page.waitForFunction(
      () => {
        const editor = document.querySelector('.monaco-editor');
        return (
          editor &&
          editor.querySelector('.view-line') &&
          window.monaco &&
          window.monaco.editor.getModels().length > 0
        );
      },
      { timeout: 60000 },
    );

    const models = await page.evaluate(() => {
      const monacoModels = (window as any).monaco.editor.getModels();
      return monacoModels
        .map((model: any) => ({
          uri: model.uri.toString(),
          value: model.getValue(),
          isTest:
            model.uri.toString().includes('test') ||
            model.uri.toString().includes('type-testing') ||
            model.getValue().includes('import type { Expect'),
        }))
        .sort((a: any, b: any) => a.uri.localeCompare(b.uri));
    });

    console.log(
      'Found models:',
      models.map((m: any) => ({
        uri: m.uri,
        isTest: m.isTest,
        preview: m.value.slice(0, 100),
      })),
    );

    const mainModel = models.find(
      (m: any) =>
        !m.isTest &&
        m.value.length > 0 &&
        !m.uri.includes('node_modules') &&
        !m.value.includes('import') &&
        (m.uri.includes('user.ts') ||
          /type\s+.*=/.test(m.value) ||
          m.value.includes('export type')),
    );

    const testModel = models.find(
      (m: any) =>
        m.isTest &&
        m.value.includes('import type { Expect') &&
        !m.uri.includes('node_modules/type-testing'),
    );

    if (!testModel) {
      console.warn('No test file found - this might be an issue');
    }

    const tests = testModel
      ? cleanContent(testModel.value)
      : `import type { Expect, Equal } from 'type-testing';\n\n// Add tests here`;

    console.log('Found tests:', {
      testModelUri: testModel?.uri,
      testPreview: testModel?.value.slice(0, 200),
      finalTestContent: tests.slice(0, 200),
    });

    if (!mainModel && !testModel) {
      throw new ScraperError(
        `Could not find main code content or test content: ${models.map((m: any) => ({
          uri: m.uri,
          isTest: m.isTest,
          length: m.value.length,
        }))}`,
      );
    }

    const code = mainModel?.value ?? '';

    const description = await page.evaluate(() => {
      const descEl = document.querySelector('[data-testid="challenge-description"], .prose-invert');
      return descEl ? descEl.textContent?.trim() : '';
    });

    if (!description) {
      throw new ScraperError('No description found');
    }

    return {
      description,
      code: cleanContent(code),
      tests: tests,
    };
  } catch (error) {
    console.error('Error during page fetch:', error);
    await page.screenshot({
      path: `error-screenshot-${year}-${day}.png`,
      fullPage: true,
    });
    throw error;
  } finally {
    await browser.close();
  }
}

/**
 * Saves challenge content to the filesystem in a structured format
 * @async
 * @param {number} year - The challenge year (e.g. 2023, 2024)
 * @param {number} day - The challenge day number (1-25)
 * @param {Challenge} content - The challenge content to save
 * @throws {Error} If file operations fail or directory creation fails
 * @description
 * Creates a directory structure: <year>/<day>/ containing:
 * - question.md: Challenge description in markdown
 * - question.d.ts: TypeScript type definitions
 * - tests.ts: Test cases
 * - tsconfig.json: TypeScript configuration
 */
async function saveChallenge(year: number, day: number, content: Challenge) {
  try {
    const baseDir = path.join(process.cwd(), year.toString(), day.toString());

    try {
      await rm(baseDir, { recursive: true, force: true });
    } catch {
    } finally {
      console.log(`Deleted directory ${baseDir}`);
    }

    await mkdir(baseDir, { recursive: true, mode: 0o755 });

    const questionContent = [
      `# Advent of TypeScript ${year} - Day ${day}`,
      '',
      content.description,
      '',
    ].join('\n');

    const tsConfig = {
      extends: '../../tsconfig.json',
      compilerOptions: {
        verbatimModuleSyntax: true,
        noEmit: true,
        paths: {
          '*': ['./*'],
        },
      },
      include: ['question.d.ts', 'tests.ts'],
    };

    const cleanedCode = content.code
      .replace(/\u200B/g, '')
      .replace(/\u200C/g, '')
      .replace(/\u200D/g, '')
      .replace(/\uFEFF/g, '')
      .replace(/\u00A0/g, ' ');
    await Promise.all([
      writeFile(path.join(baseDir, 'question.md'), questionContent, { mode: 0o644 }),
      writeFile(path.join(baseDir, 'question.d.ts'), cleanedCode, { mode: 0o644 }),
      writeFile(path.join(baseDir, 'tests.ts'), content.tests, { mode: 0o644 }),
      writeFile(path.join(baseDir, 'tsconfig.json'), JSON.stringify(tsConfig, null, 2), {
        mode: 0o644,
      }),
    ]);

    console.log(`Challenge for day ${day} saved successfully`);
  } catch (error) {
    console.error('Challenge save failed:', error);
    throw error;
  }
}

/**
 * Main execution function that orchestrates the scraping process
 * @async
 * @description
 * - Parses command line arguments for year and day
 * - Validates input parameters
 * - Fetches challenge content using Puppeteer
 * - Saves content to filesystem
 * @throws {ScraperError} If command line arguments are invalid
 * @throws {Error} If scraping or saving operations fail
 * @example
 * ```bash
 * bun run scraper.ts 2024 1
 * ```
 */
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
