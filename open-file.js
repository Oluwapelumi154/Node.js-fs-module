// fs.open(path : string, flag : string, [mode],callback) -Aynchronous
//fs.openSync(path : string, flag : string, mode)-Synchronous

// flags are used in determining the type of action performed on the file
// Examples of the flag used with the fs modules is found in the flags.txt file

const fs = require('fs');

// Opening file Asynchronously
fs.open('flags.txt', 'r+', (err, fd) => {
  if (err) {
    console.log(
      'There was an Error Reading or Writing to the file',
      err.message
    );
  } else {
    fs.close(fd, (err) => {
      if (err) {
        console.log(`There was an Error Closing the file`);
      }
      console.log('file closed Successfully');
    });
    console.log(`file (${fd}) successfully Opened`);
  }
});

// Open file Synchronously
