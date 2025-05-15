const fs = require('fs');
const path = require('path');

// Function to recursively search for and delete node_modules directories
function removeNodeModules(dir) {
  // Get list of all files/folders in the directory
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${dir}`, err);
      return;
    }

    files.forEach(file => {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        if (file.name === 'node_modules') {
          console.log(`Removing: ${fullPath}`);
          fs.rm(fullPath, { recursive: true, force: true }, err => {
            if (err) {
              console.error(`Error removing ${fullPath}`, err);
            } else {
              console.log(`Successfully removed: ${fullPath}`);
            }
          });
        } else {
          // Recurse into subdirectories
          removeNodeModules(fullPath);
        }
      }
    });
  });
}

// Start removing node_modules from the current directory
removeNodeModules(process.cwd());
