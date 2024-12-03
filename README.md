# Advent of TypeScript Scraper

A tool to automatically fetch and organize TypeScript challenges from the Advent of TypeScript series.

## Features

- Automatically scrapes challenges from TypeHero's Advent of TypeScript
- Creates organized directory structure for each day
- Generates TypeScript configuration for each challenge
- Extracts challenge descriptions, initial code, and tests

## Project Structure

```

advent-of-typescript/
├── src/
│   └── scraper.ts       # Main scraper logic
├── {year}/              # Year directories (e.g., 2024)
│   └── {day}/          # Day directories (1-25)
│       ├── question.md     # Challenge description
│       ├── question.d.ts   # Type definitions
│       ├── tests.ts        # Challenge tests
│       └── tsconfig.json   # Local TypeScript config
└── tsconfig.json        # Root TypeScript config

```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.1.36 or higher
- TypeScript 5.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/WomB0ComB0/advent-of-typescript
cd advent-of-typescript

# Install dependencies
bun install
```

### Usage

To fetch a specific day's challenge:

```bash
bun run start <year> <day>
```

Example:

```bash
bun run start 2024 1
```

To fetch all challenges for a given year:

```bash
bun start.ts <year>
```

## Development

The scraper uses:

- Puppeteer for web scraping
- Cheerio for HTML parsing
- TypeScript for type safety

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
