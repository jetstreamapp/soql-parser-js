var argv = require('minimist')(process.argv.slice(2));

console.log('argv:');
console.log(JSON.stringify(argv, null, 2));
