---
sidebar_position: 3
---

# CLI

Install globally or use `npx` to interact with the cli.

### Available Commands

- `soql-parser-js --help` (or using `npx`: `npx soql-parser-js --help`)
- `soql-parser-js parse --help`
- `soql-parser-js compose --help`
- `soql-parser-js format --help`

### Examples

#### Parse

`npx soql-parser-js parse "SELECT Id FROM Account"`

```bash
{"fields":[{"type":"Field","field":"Id"}],"sObject":"Account"}
```

#### Compose

`npx soql-parser-js compose "{\"fields\":[{\"type\":\"Field\",\"field\":\"Id\"}],\"sObject\":\"Account\"}"`

```bash
SELECT Id FROM Account
```

`npx soql-parser-js compose "{\"fields\":[{\"type\":\"Field\",\"field\":\"Id\"}],\"sObject\":\"Account\"}" --json` or -j

```json
{ "query": "SELECT Id FROM Account" }
```

#### Format

`npx soql-parser-js format "SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1"`

```bash
SELECT Name, COUNT(Id)
FROM Account
GROUP BY Name
HAVING COUNT(Id) > 1
```

`npx soql-parser-js format "SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1 -j`

```json
{ "query": "SELECT Name, COUNT(Id)\nFROM Account\nGROUP BY Name\nHAVING COUNT(Id) > 1" }
```

#### Is Valid

`npx soql-parser-js valid "SELECT Id FROM Account"`

```bash
true
```

`npx soql-parser-js valid "SELECT Id invalid FROM Account"`

ℹ️ this returns an exit code of 1

```bash
false
```

`npx soql-parser-js valid "SELECT Id FROM Account" -j`

```json
{ "isValid": true }
```

`npx soql-parser-js valid "SELECT Id invalid invalid FROM Account" -j`

ℹ️ this returns an exit code of 0

```json
{ "isValid": false }
```

### List of options

`soql-parser-js --help`

```bash
Usage: soql-parser-js [options] [command]

Options:
  -h, --help                 output usage information

Commands:
  parse [options] <sql>
  compose [options] <query>
  format [options] <sql>
  valid <sql>
```

`soql-parser-js parse --help`

```bash
Usage: parse [options] <sql>

Options:
  -a, --allow-apex     allow apex bind variables
  -p, --allow-partial  allow partial queries
  -i, --ignore-errors  ignore parse errors, return as much of query as possible
  -h, --help           output usage information
```

`soql-parser-js compose --help`

```bash
Usage: compose [options] <query>

Options:
  -f, --format                   format output
  -i --indent <chars>            number of tab characters to indent (default: 1)
  -m --line-length <chars>       max number of characters per lins (default: 60)
  -s --subquery-parens-new-line  subquery parens on own line
  -k --keywords-new-line         new line after keywords
  -j, --json                     output as JSON
  -h, --help                     output usage information
```

`soql-parser-js format --help`

```bash
Usage: format [options] <sql>

Options:
  -a, --allow-apex     allow apex bind variables
  -p, --allow-partial  allow partial queries
  -i --indent <chars>            number of tab characters to indent (default: 1)
  -m --line-length <chars>       max number of characters per lins (default: 60)
  -s --subquery-parens-new-line  subquery parens on own line
  -k --keywords-new-line         new line after keywords
  -j, --json                     output as JSON
  -h, --help                     output usage information
```

`soql-parser-js valid --help`

```bash
Usage: valid [options] <sql>

Options:
  -a, --allow-apex     allow apex bind variables
  -p, --allow-partial  allow partial queries
  -j, --json  output as JSON
  -h, --help  output usage information
```
