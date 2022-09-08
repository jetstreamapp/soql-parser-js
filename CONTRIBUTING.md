# How to contribute

Contributions of any kind are welcome and appreciated.

# What features are allowed

Any feature that is part of the core project and does not deviate from what the product is will be considered to be accepted.

# Making Changes

- Fork the repository
- Create a new branch from master (usually) and with a meaningful name for your changes
- Make your changes
- Commit and push your change
  - Please run `prettier` on all modified files prior to opening your pull request
- open a Pull Request for the master branch

# Re-generating parse after grammar change

:beetle: There is a bug in the generated ANTLR output that must be corrected by hand in the generated output to make this work.

- Note: I am not an expert with language parsing/antler and I did not create the grammar, so I was not able to figure this bug out. I believe the problem relies with `antlr4ts-cli` and the way imports are always added to the end of the file

## Generate lexer and parser

- Run `npm run antlr`
  - This will remove and re-generate all of the lexer and parser files required to parse SOQL
  - :beetle: Manual steps:
    - Open `SOQLParser.ts` after the file generation
    - Find the class `Keywords_alias_allowedContext` somewhere near line ~44K
    - Cut this class and all remaining classes through the end of the file and paste right underneath the `import` statements
- Run all unit tests afterwards `npm run test` - if anything is broken, please troubleshoot or create a PR and ask for assistance

## Update code to support new grammar

- Start with adding a new unit test
  - This will ensure the parser and composer support the syntax
- Update the parser to listen for the new grammar (this depends on grammar change that was implemented)
  - Assuming there is a new clause somewhere, look in `lib/generated/SOQLListener.ts` to find the new enter/exit methods that were added
  - Implement these methods in `lib/SOQLListener.ts` to handle parsing the logic
  - Update `lib/SOQLComposer.ts` to handle creating the SOQL query from the parsed query

## Unit tests

- ensure your new unit tests cover all the cases
- Ensure unit tests are all passing, or open a PR and ask for assistance
