import { testCases, TestCase } from '../test/test-cases';
import { writeFileSync } from 'fs';
import { join } from 'path';

const outputPath = join(__dirname, '../docs/static/sample-queries-json.json');

console.log('copying test-cases to docs');

writeFileSync(
  outputPath,
  JSON.stringify(
    testCases.map((tc: TestCase) => tc.soql),
    null,
    2,
  ),
);
