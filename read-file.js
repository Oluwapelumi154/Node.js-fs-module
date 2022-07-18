//  Reading content of files usinf fs.read.fs.readSynx

// fs.read(fd,buffer,offset,length,position) asynchronous
// fs.readSync(fd,buffer,offset,length,position) synchronous

const fs = require('fs');
const filesize = fs.statSync('flags.txt').size;
const buffer = Buffer.alloc(filesize);

fs.open('flags.txt', 'r+', (err, fd) => {
  if (err) {
    console.log(
      'There was an Error Reading or Writing to the file',
      err.message
    );
  } else {
    // SYNChRONOUS
    // let bytes = fs.readSync(fd, buffer, 0, filesize, 0);
    // console.log(`bytes: ${bytes}`);
    // console.log(`content: ${buffer.toString()}`);

    // ASYNCHRONOUS
    fs.read(fd, buffer, 0, filesize, 0, (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`bytes ${bytes} ${fd}`);
        console.log(`content: ${buffer.toString()}`);
      }
    });
    fs.close(fd, (err) => {
      console.log('file Closed Successfully');
    });
  }
});

// Reading the content of the using fs.readFile and fs.readFileSync

// fs.readFileSync(path:string,{encoding,flag}) -Synchronously
// fs.readFile(path:string,{encoding,flag},callback) -Asynchronous;y

const data = fs.readFileSync('flags.txt', { encoding: 'utf8' });
console.log(data, 'file');

//ASYCHRONOUS
fs.readFile('flags.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
