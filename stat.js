// fs.statSync(path) -synchronous
// fs.stat(path,callback) - asynchronous
const fs = require('fs');
// Synchronous
const stats = fs.statSync('read.js');
console.log(stats.size);

// Asynchronous
fs.stat('read.js', (err, stat) => {
  if (err) {
    console.log(err.message);
  }
  console.log(stat);
});
