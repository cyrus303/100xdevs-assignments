const fs = require('fs');

fs.readFile('cleanFile.txt', (err, data) => {
  if (err) {
    throw err;
  }
  let fileData = data.toString();

  fileData = fileData.replace(/\s+/g, ' ').trim();

  fs.writeFile('cleanFile.txt', fileData, (err) => {
    if (err) {
      throw err;
    }
    console.log('cleaned data written successfully');
  });
});
