const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const dir = 'test';

const findjs = async dirPath=> {
  try {
    const files = await readdir(dirPath);  

    for (const file of files) {
      const fullPath = path.join(dirPath, file); 
      const fileStat = await stat(fullPath);    

      if (fileStat.isDirectory()) {
        await findjs(fullPath);
      } else if (path.extname(file) === '.js') {
        console.log(fullPath);
      }
    }
  } catch (err) {
    console.error(err);
  }
}


findjs(dir);
