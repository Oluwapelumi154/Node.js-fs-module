//fs.write(fd,string,offset,length,position,callback)
//fs.writeSync(fd,strinf,offset,length,position)
const fs = require('fs');
fs.open('sample.txt', 'a', (err, fd) => {
  if (err) {
    console.log(err.message);
  } else {
    //Synchronous
    // let bytes = fs.writeSync(fd, 'Hello from file Systems');
    // console.log(`${bytes} written`);

    // SYNCHRONOUS
    fs.write(fd, 'Hello', (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(bytes);
      }
    });
  }
});
