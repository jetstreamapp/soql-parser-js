import { parseQuery, composeQuery, formatQuery, isQueryValid, FormatOptions } from '../src';
import { ParseQueryConfig } from '../src/parser/parser';

interface ParsedArgs {
  command: string;
  query: string;
  flags: Record<string, string | boolean>;
}

function parseArgs(argv: string[]): ParsedArgs {
  const args = argv.slice(2);
  const command = args[0] ?? '';
  const query = args[1] ?? '';
  const flags: Record<string, string | boolean> = {};

  for (let i = 2; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = args[i + 1];
      if (next && !next.startsWith('-')) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else if (arg.startsWith('-') && arg.length === 2) {
      const key = arg.slice(1);
      const next = args[i + 1];
      if (next && !next.startsWith('-')) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    }
  }

  return { command, query, flags };
}

function hasFlag(flags: Record<string, string | boolean>, long: string, short: string): boolean {
  return flags[long] === true || flags[short] === true;
}

function getFlagValue(flags: Record<string, string | boolean>, long: string, short: string): string | undefined {
  const val = flags[long] ?? flags[short];
  return typeof val === 'string' ? val : undefined;
}

function getFormatOptions(flags: Record<string, string | boolean>): FormatOptions {
  const formatOptions: FormatOptions = {};
  const indent = getFlagValue(flags, 'indent', 'i');
  const indentString = getFlagValue(flags, 'indent-string', 't');
  const lineLength = getFlagValue(flags, 'line-length', 'm');

  if (indent) {
    formatOptions.numIndent = Number(indent);
  }
  if (indentString !== undefined) {
    formatOptions.indentString = indentString;
  }
  if (lineLength) {
    formatOptions.fieldMaxLineLength = Number(lineLength);
  }
  if (hasFlag(flags, 'subquery-parens-new-line', 's')) {
    formatOptions.fieldSubqueryParensOnOwnLine = true;
  }
  if (hasFlag(flags, 'keywords-new-line', 'k')) {
    formatOptions.newLineAfterKeywords = true;
  }
  return formatOptions;
}

function printUsage(): void {
  console.log(`Usage: soql-parser-js <command> <query> [options]

Commands:
  parse <soql>     Parse a SOQL query and output JSON AST
  compose <json>   Compose a SOQL query from a JSON AST
  format <soql>    Format a SOQL query
  valid <soql>     Check if a SOQL query is valid

Parse options:
  -a, --allow-apex       Allow apex bind variables
  -p, --allow-partial    Allow partial queries
  -i, --ignore-errors    Ignore parse errors, return as much of query as possible

Compose options:
  -f, --format                   Format output
  -i, --indent <count>           Number of times the indent string is repeated per level (default: 1)
  -t, --indent-string <string>   String used for one unit of indentation (default: tab), e.g. --indent-string "  "
  -m, --line-length <chars>      Max number of characters per line (default: 60)
  -s, --subquery-parens-new-line Subquery parens on own line
  -k, --keywords-new-line        New line after keywords
  -j, --json                     Output as JSON

Format options:
  -a, --allow-apex               Allow apex bind variables
  -p, --allow-partial            Allow partial queries
  -i, --indent <count>           Number of times the indent string is repeated per level (default: 1)
  -t, --indent-string <string>   String used for one unit of indentation (default: tab), e.g. --indent-string "  "
  -m, --line-length <chars>      Max number of characters per line (default: 60)
  -s, --subquery-parens-new-line Subquery parens on own line
  -k, --keywords-new-line        New line after keywords
  -j, --json                     Output as JSON

Valid options:
  -a, --allow-apex       Allow apex bind variables
  -p, --allow-partial    Allow partial queries
  -j, --json             Output as JSON`);
}

const { command, query, flags } = parseArgs(process.argv);

if (!command || !query) {
  printUsage();
  process.exit(command ? 1 : 0);
}

switch (command) {
  case 'parse': {
    console.log(
      JSON.stringify(
        parseQuery(query, {
          allowApexBindVariables: hasFlag(flags, 'allow-apex', 'a'),
          allowPartialQuery: hasFlag(flags, 'allow-partial', 'p'),
          ignoreParseErrors: hasFlag(flags, 'ignore-errors', 'i'),
        }),
      ),
    );
    break;
  }

  case 'compose': {
    const formatOptions = getFormatOptions(flags);
    const shouldFormat = hasFlag(flags, 'format', 'f');
    const output = composeQuery(JSON.parse(query), { format: shouldFormat, formatOptions });

    if (hasFlag(flags, 'json', 'j')) {
      console.log(JSON.stringify({ query: output }));
    } else {
      console.log(output);
    }
    break;
  }

  case 'format': {
    const parseQueryConfig: ParseQueryConfig = {};

    if (hasFlag(flags, 'allow-apex', 'a')) {
      parseQueryConfig.allowApexBindVariables = true;
    }
    if (hasFlag(flags, 'allow-partial', 'p')) {
      parseQueryConfig.allowPartialQuery = true;
    }

    const output = formatQuery(query, getFormatOptions(flags), parseQueryConfig);
    if (hasFlag(flags, 'json', 'j')) {
      console.log(JSON.stringify({ query: output }));
    } else {
      console.log(output);
    }
    break;
  }

  case 'valid': {
    const parseQueryConfig: ParseQueryConfig = {};

    if (hasFlag(flags, 'allow-apex', 'a')) {
      parseQueryConfig.allowApexBindVariables = true;
    }
    if (hasFlag(flags, 'allow-partial', 'p')) {
      parseQueryConfig.allowPartialQuery = true;
    }

    const isValid = isQueryValid(query, parseQueryConfig);
    if (hasFlag(flags, 'json', 'j')) {
      console.log(JSON.stringify({ isValid }));
    } else {
      if (isValid) {
        console.log('true');
      } else {
        console.error('false');
        process.exit(1);
      }
    }
    break;
  }

  default: {
    console.error(`Unknown command: ${command}`);
    printUsage();
    process.exit(1);
  }
}
