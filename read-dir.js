// Reading Content of Directory
//fs.readDir(path,[Option],callback)
//fs.readDirSync(path,[Option])

const fs = require('fs');
let dirBuff = Buffer.from('folder');

// Synchronouss
const files = fs.readdirSync('folder', 'buffer');
// const files = fs.readdirSync('folder', {encoding:'utf8'});

// Asynchronous
fs.readdir('folder', 'utf-8', (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(files);
  }
});
