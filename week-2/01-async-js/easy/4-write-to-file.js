const fs = require('fs');
const data = 'This is the new content of the file.';
fs.writeFile('a.txt', data, (err) => {
  if (err) {
    throw err;
  }
  console.log('Data has been written to file successfully.');
});

//to append to a file

const newData = 'This is new data to append to a file';

fs.appendFile('a.txt', newData, (err) => {
  if (err) {
    throw err;
  }
  console.log('append successful');
});
