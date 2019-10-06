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

//     console.log(chalk.whiteBright(`Duration: ${chalk.greenBright(Number(importDuration).toFixed(4))} milliseconds`));

//     console.log(
//       chalk.whiteBright(`Parser testing: ${testCases.length} X ${numIterations} = ${testCases.length * numIterations} iterations.`),
//     );
//     const start = performance.now();
//     for (let i = 0; i < numIterations; i++) {
//       testCases.forEach(testCase => {
//         try {
//           parseQuery(testCase.soql, { allowApexBindVariables: true, logErrors: true });
//         } catch (ex) {
//           console.log('Exception on TC', testCase.testCase, testCase.soql);
//           console.log(ex);
//           throw ex;
//         }
//       });
//     }
//     const end = performance.now();
//     const duration = end - start;
//     console.log(chalk.whiteBright(`Duration: ${chalk.greenBright(Number(duration / 1000).toFixed(4))} seconds`));
//     console.log(
//       chalk.whiteBright(
//         `Average of ${chalk.greenBright(Number(duration / (testCases.length * numIterations)).toFixed(4))} milliseconds per query`,
//       ),
//     );
//     return;
//   });
// });
