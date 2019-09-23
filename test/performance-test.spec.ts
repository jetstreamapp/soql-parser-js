import 'mocha';
import testCases from './test-cases';
import { performance } from 'perf_hooks';
import chalk from 'chalk';

// Uncomment this for performance testing.

// describe.only('parse queries', () => {
//   it('should run performance tests', async () => {
//     const numIterations = 1000;

//     console.log(chalk.whiteBright(`Importing SOQL Parser library.`));

//     const startImport = performance.now();
//     const { parseQuery } = await import('../src');
//     const endImport = performance.now();
//     const importDuration = endImport - startImport;

//     console.log(chalk.whiteBright(`Duration: ${chalk.greenBright(importDuration / 1000 + ' sec')}`));

//     console.log(
//       chalk.whiteBright(`Parser testing: ${testCases.length} X ${numIterations} = ${testCases.length * numIterations} iterations.`),
//     );
//     const start = performance.now();
//     for (let i = 0; i < numIterations; i++) {
//       testCases.forEach(testCase => {
//         parseQuery(testCase.soql);
//       });
//     }
//     const end = performance.now();
//     const duration = end - start;
//     console.log(chalk.whiteBright(`Duration: ${chalk.greenBright(duration / 1000 + ' sec')}`));
//     return;
//   });
// });
