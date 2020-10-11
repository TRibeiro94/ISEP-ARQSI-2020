const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total memory: ' + totalMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);