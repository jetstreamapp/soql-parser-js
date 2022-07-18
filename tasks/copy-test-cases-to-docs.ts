import { testCases, TestCase } from '../test/test-cases';
import { writeJSONSync } from 'fs-extra';
import { join } from 'path';

const outputPath = join(__dirname, '../docs/static/sample-queries-json.json');

console.log('copying test-cases to docs');

writeJSONSync(
  outputPath,
  testCases.map((tc: TestCase) => tc.soql),
  { spaces: 2 },
);
