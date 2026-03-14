import { performance } from 'perf_hooks';
import { describe, it } from 'vitest';
import testCases from './test-cases';

// SKIPPED -
// describe.only('parse queries', () => {
describe('parse queries', () => {
  it('should run performance tests', async () => {
    const numIterations = 1000;

    console.log(`Importing SOQL Parser library.`);

    const startImport = performance.now();
    const { parseQuery } = await import('../src');
    const endImport = performance.now();
    const importDuration = endImport - startImport;

    console.log(`Duration: ${Number(importDuration).toFixed(4)} milliseconds`);

    console.log(`Parser testing: ${testCases.length} X ${numIterations} = ${testCases.length * numIterations} iterations.`);
    const start = performance.now();
    for (let i = 0; i < numIterations; i++) {
      testCases.forEach(testCase => {
        try {
          parseQuery(testCase.soql, { allowApexBindVariables: true, logErrors: false, ...testCase.options });
        } catch (ex) {
          console.log('Exception on TC', testCase.testCase, testCase.soql);
          console.log(ex);
          throw ex;
        }
      });
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`Duration: ${Number(duration / 1000).toFixed(4)} seconds`);
    console.log(`Average of ${Number(duration / (testCases.length * numIterations)).toFixed(4)} milliseconds per query`);
    return;
  });
});

export {};
