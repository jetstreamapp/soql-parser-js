import * as soqlParser from '.';
import { isString, pad } from './utils';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { isObject } from 'util';

const argv = require('minimist')(process.argv.slice(2));

interface Options {
  query: string | undefined;
  compose: string | undefined;
  output: string | undefined;
}

interface Print {
  error?: boolean;
  message?: string;
  data?: string;
  debug?: boolean;
  overrideColor?: string;
}

const debug: boolean | undefined = argv.debug || argv.d;
const printJson: boolean | undefined = argv.json || argv.j;

log({ data: JSON.stringify(argv, null, 2) });

function log(options: Print) {
  if (debug) {
    print({ ...options, debug: true });
  }
}

function print(options: Print) {
  let color = options.error ? '31' : options.overrideColor;
  if (printJson && !options.debug) {
    if (isString(options.data)) {
      try {
        options.data = JSON.parse(options.data);
      } catch (ex) {}
    }
    console.log(JSON.stringify(options), '\n');
  } else {
    if (options.debug && options.message) {
      color = color || '33';
      options.message = `[DEBUG] ${options.message}`;
      console.log(`\x1b[${color}m%s\x1b[0m`, options.message);
    } else if (options.message) {
      color = color || '32';
      console.log(`\x1b[${color}m%s\x1b[0m`, options.message);
    }

    // reset color to default
    color = options.error ? '31' : options.overrideColor;

    if (options.data) {
      if (isObject(options.data)) {
        options.data = JSON.stringify(options.data, null, 2);
      }
    }

    if (options.debug && options.data) {
      color = color || '33';
      options.data = `[DEBUG]\n${options.data}`;
      console.log(`\x1b[${color}m%s\x1b[0m`, options.data);
    } else if (options.data) {
      color = color || '1';
      console.log(`\x1b[${color}m%s\x1b[0m`, options.data);
    }
  }
}

function run() {
  const options: Options = {
    query: argv.query || argv.q,
    compose: argv.compose || argv.c,
    output: argv.output || argv.o,
  };

  log({ message: 'Options', data: JSON.stringify(options, null, 2) });

  const help: boolean | undefined = argv.help || argv.h;
  let validParams = false;

  if (isString(options.query)) {
    log({ message: 'Parsing Query' });
    validParams = true;
    parseQuery(options);
  }

  if (isString(options.compose)) {
    log({ message: 'Composing Query' });
    validParams = true;
    composeQuery(options);
  }

  if (isString(help)) {
    log({ message: 'Showing explicit Help' });
    validParams = true;
    printHelp();
  }

  if (!validParams) {
    log({ message: 'Showing implicit Help' });
    printHelp();
  }

  process.exit(0);
}

function parseQuery(options: Options) {
  // if query starts with SELECT we know it is not a file, otherwise we will attempt to parse a file
  // Check if query does not look like a query - attempt to parse file if so
  let query = options.query;
  log({ message: query });
  if (
    !options.query
      .trim()
      .toUpperCase()
      .startsWith('SELECT')
  ) {
    log({ message: 'Query does not start with select, attempting to read file' });
    try {
      if (existsSync(options.query)) {
        query = readFileSync(options.query, 'utf8');
        log({ message: 'Query read from file:', data: query });
        if (
          !query
            .trim()
            .toUpperCase()
            .startsWith('SELECT')
        ) {
          print({
            error: true,
            message: `The query contained within the file ${
              options.query
            } does not appear to be valid, please make sure the query starts with SELECT.`,
          });
          process.exit(1);
        }
      } else {
        print({
          error: true,
          message: 'The query must start with SELECT or must be a valid file path to a text file containing the query.',
        });
        process.exit(1);
      }
    } catch (ex) {
      print({
        error: true,
        message: `There was an error parsing the file ${
          options.query
        }. Please ensure the file exists and is a text file containing a single SOQL query.`,
      });
      log({ error: true, data: ex });
      process.exit(1);
    }
  }

  try {
    const parsedQuery = soqlParser.parseQuery(query);
    const queryJson = JSON.stringify(parsedQuery, null, 2);
    log({ data: queryJson });
    if (options.output) {
      saveOutput({ path: options.output, data: queryJson });
    } else {
      print({
        message: `Parsed Query:`,
        data: queryJson,
      });
    }
  } catch (ex) {
    print({
      error: true,
      message: `There was an error parsing your query`,
      data: ex.message,
    });
    log({ error: true, data: ex });
    process.exit(1);
  }
}

function composeQuery(options: Options) {
  // if query starts with SELECT we know it is not a file, otherwise we will attempt to parse a file
  // Check if query does not look like a query - attempt to parse file if so
  let parsedQueryString = options.compose;
  if (!options.compose.trim().startsWith('{')) {
    log({ message: 'Compose is a filepath - attempting to read file' });
    try {
      if (existsSync(options.compose)) {
        parsedQueryString = readFileSync(options.compose, 'utf8');
        log({
          message: 'Parsed query data JSON read from file',
          data: parsedQueryString,
        });
      } else {
        print({
          error: true,
          message: `The file ${
            options.compose
          } does not exist, Please provide a valid filepath or an escaped JSON string.`,
        });
        process.exit(1);
      }
    } catch (ex) {
      print({
        error: true,
        message: `There was an error reading the file ${
          options.compose
        }. Please ensure the file exists and is a text file containing a single parsed query JSON object.`,
      });
      log({ error: true, data: ex });
      process.exit(1);
    }
  }

  try {
    const parsedQuery = JSON.parse(parsedQueryString);
    const query = soqlParser.composeQuery(parsedQuery);
    if (options.output) {
      log({ message: 'Attempting to save query to file' });
      saveOutput({ path: options.output, data: query });
    } else {
      print({
        message: `Composed Query:`,
        data: query,
      });
    }
  } catch (ex) {
    print({
      error: true,
      message: `There was an error composing your query.`,
      data: ex.message,
    });
    log({ error: true, data: ex });
    process.exit(1);
  }
}

function saveOutput(options: { path: string; data: string }) {
  try {
    print({ message: `Saving output to ${options.path}` });
    writeFileSync(options.path, options.data);
  } catch (ex) {
    print({
      message: `There was an error saving the file, make sure that you have access to the file location and that any directories in the path already exist.`,
      data: ex.message,
    });
    log({ error: true, data: ex });
    process.exit(1);
  }
}

function printHelp() {
  const help = [
    {
      param: '--query,   -q',
      message: 'A SOQL query surrounded in quotes or a file path to a text file containing a SOQL query.',
    },
    {
      param: '--compose, -c',
      message:
        'An escaped and quoted parsed SOQL JSON string or a file path to a text file containing a parsed query JSON object.',
    },
    { param: '--output,  -o', message: 'Filepath.' },
    { param: '--json,    -j', message: 'Provide all output messages as JSON.' },
    { param: '--debug,   -d', message: 'Print additional debug log messages.' },
    { param: '--help,    -h', message: 'Show this help message.' },
  ];
  print({ message: 'SOQL Parser JS CLI -- Help' });
  print({
    message:
      'To use the CLI, provide one or more of the following commands. Either one of the  query or compose method are required',
  });
  help.forEach(item => {
    print({ overrideColor: '0', data: `${pad(item.param, 20, 4)}${item.message}` });
  });
}

run();
