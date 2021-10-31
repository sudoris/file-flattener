import * as fs from 'fs/promises'
import { argv } from 'process'
import * as path from 'path'

// Print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// if (!argv[2]) {
//   console.log("directory not found")
//   process.exit()
// }

const targetDir = argv[2]
let rootDir

// Attempt to open target directory
try {
  rootDir = await fs.opendir(targetDir); 
} catch (err) {
  console.error(err);
  process.exit()
}

function moveFile(currentPath, targetPath) {
  console.log('target path: ', targetPath)
}

for await (const dirent of rootDir) {
  if (dirent.isDirectory()) {
    const currentDir = path.resolve(targetDir, dirent.name)
    const files = await fs.readdir(currentDir);
    for (const name of files) {
      if (name.endsWith('.mp4')) {
        const currentPath = path.resolve(currentDir, name)
        const targetPath = path.resolve(targetDir, name)
        moveFile(currentPath, targetPath)
      }
    }
  } 
}





