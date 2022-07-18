//fs.write(fd,buffer,offset,length,position,callback)
//fs.writeSync(fd,buffer,offset,length,position)

const fs = require('fs');
const data = 'OFFSETProgramming is my Hob';
const buffer = Buffer.from(data, 'utf-8');
console.log(buffer);
const offset = 11;
fs.open('bufdata.txt', 'w', (err, fd) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('file successfully opened');
    // SYNCHRONOUS
    // const bytes = fs.writeSync(
    //   fd,
    //   buffer,
    //   offset,
    //   buffer.byteLength - offset,
    //   0
    // );
    // console.log(`${bytes} bytes written`);

    // ASYNCHRONOUS
    fs.write(fd, buffer, offset, buffer.byteLength - offset, (err, bytes) => {
      if (err) {
        console.log(err.name);
      } else {
        console.log(`${bytes} written`);
      }
    });
    fs.close(fd, (err) => {
      console.log('fs successfully closed');
    });
  }
});
