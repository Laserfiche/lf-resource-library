
const fs = require('fs');
const path = require('path');

function deleteFilesRecursively(dir, ext) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      deleteFilesRecursively(fullPath, ext);
    } else if (file.endsWith(ext)) {
      fs.unlinkSync(fullPath);
      console.log(`Deleted: ${fullPath}`);
    }
  });
}

deleteFilesRecursively('resources', '.xlf');
