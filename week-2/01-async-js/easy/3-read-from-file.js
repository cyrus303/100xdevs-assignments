const fs = require('fs').promises;

const readfile = async () => {
  try {
    const data = await fs.readFile('./a.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

readfile();

// without async syntax

const fs = require('fs');
fs.readFile('a.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
