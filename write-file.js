//fs.writeFileSync(path,data,options)
//fs.writeFile(path,data,options,callbacks)

const fs = require('fs');
const buffer = Buffer.from('hello', 'utf-8');
//synchronous
fs.writeFileSync('hell.txt', buffer, { flag: 'a' });
// Asynchronous
fs.writeFile('hell.txt', 'yes asychronous', { flag: 'a' }, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('data successfully written');
  }
});
