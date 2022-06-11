import { parseQuery, composeQuery, isQueryValid, formatQuery, FormatOptions } from '../src';
import { Command } from 'commander';
import { ParseQueryConfig } from '../src/parser/parser';

interface ParseCommandActions {
  allowApex: boolean;
  allowPartial: boolean;
  ignoreErrors: boolean;
}

interface ComposeCommandOptions {
  allowApex: boolean;
  allowPartial: boolean;
  format: boolean;
  indent: number;
  lineLength: number;
  subqueryParensNewLine: boolean;
  keywordsNewLine: boolean;
  json: boolean;
}

type FormatCommandOptions = Omit<ComposeCommandOptions, 'format'>;
type IsValidCommandOptions = Pick<ComposeCommandOptions, 'allowApex' | 'allowPartial' | 'json'>;

const program = new Command();

program
  .command('parse <soql>')
  .option('-a, --allow-apex', 'allow apex bind variables')
  .option('-p, --allow-partial', 'allow partial queries')
  .option('-i, --ignore-errors', 'ignore parse errors, return as much of query as possible')
  .action((query: string, options: ParseCommandActions) => {
    console.log(
      JSON.stringify(
        parseQuery(query, {
          allowApexBindVariables: options.allowApex,
          allowPartialQuery: options.allowPartial,
          ignoreParseErrors: options.ignoreErrors,
        }),
      ),
    );
  });

program
  .command('compose <query>')
  .option('-f, --format', 'format output')
  .option('-i --indent <chars>', 'number of tab characters to indent', 1)
  .option('-m --line-length <chars>', 'max number of characters per lins', 60)
  .option('-s --subquery-parens-new-line', 'subquery parens on own line')
  .option('-k --keywords-new-line', 'new line after keywords')
  .option('-j, --json', 'output as JSON')
  .action((query: string, options: ComposeCommandOptions) => {
    const formatOptions: FormatOptions = {};
    if (options.indent) {
      formatOptions.numIndent = options.indent;
    }

    if (options.lineLength) {
      formatOptions.fieldMaxLineLength = options.lineLength;
    }

    if (options.subqueryParensNewLine) {
      formatOptions.fieldSubqueryParensOnOwnLine = options.subqueryParensNewLine;
    }

    if (options.keywordsNewLine) {
      formatOptions.newLineAfterKeywords = options.keywordsNewLine;
    }

    let output = composeQuery(JSON.parse(query), { format: options.format, formatOptions });
    if (options.json) {
      console.log(JSON.stringify({ query: output }));
    } else {
      console.log(output);
    }
  });

program
  .command('format <soql>')
  .option('-a, --allow-apex', 'allow apex bind variables')
  .option('-p, --allow-partial', 'allow partial queries')
  .option('-i --indent <chars>', 'number of tab characters to indent', 1)
  .option('-m --line-length <chars>', 'max number of characters per lins', 60)
  .option('-s --subquery-parens-new-line', 'subquery parens on own line')
  .option('-k --keywords-new-line', 'new line after keywords')
  .option('-j, --json', 'output as JSON')
  .action((query: string, options: FormatCommandOptions) => {
    const parseQueryConfig: ParseQueryConfig = {};
    const formatOptions: FormatOptions = {};

    if (options.allowApex) {
      parseQueryConfig.allowApexBindVariables = true;
    }
    if (options.allowPartial) {
      parseQueryConfig.allowPartialQuery = true;
    }

    if (options.indent) {
      formatOptions.numIndent = options.indent;
    }

    if (options.lineLength) {
      formatOptions.fieldMaxLineLength = options.lineLength;
    }

    if (options.subqueryParensNewLine) {
      formatOptions.fieldSubqueryParensOnOwnLine = options.subqueryParensNewLine;
    }

    if (options.keywordsNewLine) {
      formatOptions.newLineAfterKeywords = options.keywordsNewLine;
    }

    const output = formatQuery(query, formatOptions, parseQueryConfig);
    if (options.json) {
      console.log(JSON.stringify({ query: output }));
    } else {
      console.log(output);
    }
  });

program
  .command('valid <soql>')
  .option('-a, --allow-apex', 'allow apex bind variables')
  .option('-p, --allow-partial', 'allow partial queries')
  .option('-j, --json', 'output as JSON')
  .action((query: string, options: IsValidCommandOptions) => {
    const parseQueryConfig: ParseQueryConfig = {};

    if (options.allowApex) {
      parseQueryConfig.allowApexBindVariables = true;
    }
    if (options.allowPartial) {
      parseQueryConfig.allowPartialQuery = true;
    }

    const isValid = isQueryValid(query, parseQueryConfig);
    if (options.json) {
      console.log(JSON.stringify({ isValid }));
    } else {
      if (isValid) {
        console.log('true');
      } else {
        console.error('false');
        process.exit(1);
      }
    }
  });

program.parse(process.argv);
