import { parseQuery, composeQuery, isQueryValid, formatQuery, FormatOptions } from '../src';
import { Command } from 'commander';

interface ParseCommandActions {
  allowApex: boolean;
  ignoreErrors: boolean;
}

interface ComposeCommandOptions {
  format: boolean;
  indent: number;
  lineLength: number;
  subqueryParensNewLine: boolean;
  keywordsNewLine: boolean;
  json: boolean;
}

type FormatCommandOptions = Omit<ComposeCommandOptions, 'format'>;
type IsValidCommandOptions = Pick<ComposeCommandOptions, 'json'>;

const program = new Command();

program
  .command('parse <query>')
  .option('-a, --allow-apex', 'allow apex bind variables')
  .option('-i, --ignore-errors', 'ignore parse errors, return as much of query as possible')
  .action((query: string, options: ParseCommandActions) => {
    console.log(
      JSON.stringify(
        parseQuery(query, {
          allowApexBindVariables: options.allowApex,
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
  .command('format <query>')
  .option('-i --indent <chars>', 'number of tab characters to indent', 1)
  .option('-m --line-length <chars>', 'max number of characters per lins', 60)
  .option('-s --subquery-parens-new-line', 'subquery parens on own line')
  .option('-k --keywords-new-line', 'new line after keywords')
  .option('-j, --json', 'output as JSON')
  .action((query: string, options: FormatCommandOptions) => {
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

    const output = formatQuery(query, formatOptions);
    if (options.json) {
      console.log(JSON.stringify({ query: output }));
    } else {
      console.log(output);
    }
  });

program
  .command('valid <query>')
  .option('-j, --json', 'output as JSON')
  .action((query: string, options: IsValidCommandOptions) => {
    const isValid = isQueryValid(query);
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
