# moving-logic

A TypeScript project to learn working with anemic models and how to move logic to the proper objects.

## Order Application

**OrderApplication** is a simple Application to manage Orders in a Shop. The project has a lot of code smells, so your work is to detect and fix them, improving the overall design. You have an end-to-end test, so you can refactor the code with a safety net.

Here is a list of specific suggestions to apply:

Design Principles:

* Tell, don't ask

Object Calisthenics rules:

* Avoid the use of getters or setters
* Encapsulate collections

## Expected result

To check if you reach the goals of the exercise:

* You removed getters and setters
* You have rich models for Order and Product, with behavior in methods
* You have introduced tests for new behaviors
* You fixed smelly tests

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm (version 8 or higher recommended)

## Installation

```bash
npm install
```

## Available Commands

- `npm run build`: Compile TypeScript files to JavaScript
- `npm run test`: Run tests with Vitest
- `npm run lint`: Run Biome linter
- `npm run format`: Format code with Biome

## Development

The project uses:
- TypeScript for type-safe JavaScript
- Vitest for testing
- Biome for linting and formatting

Source code goes in `src/` directory and tests in `test/` directory.
