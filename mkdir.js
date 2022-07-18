// fs.mkdir(path,model,callback)
//fs.mkdirSync(path,model)

const fs = require('fs');
const dirname = {
  sync: 'createdDir',
  async: 'asyncCreatedDir'
};
function printBoom() {
  console.log('Boom');
}
// Synchronous
// fs.mkdirSync(dirname.sync, 0o776);
// fs.writeFileSync(`${dirname.sync}/file.js`, `(${printBoom.toString()}())`);

// Asynchronous
fs.mkdir(dirname.async, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`${dirname.async} created at ${Date.now()}`);
  fs.writeFileSync(`${dirname.async}/file.js`, `(${printBoom.toString()}())`);
});
