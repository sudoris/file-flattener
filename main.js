import * as fs from 'fs/promises'
import { argv } from 'process'
import * as path from 'path'

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

if (!argv[2]) {
  console.log("directory not found")
  process.exit()
}

const targetDir = argv[2]

try {
  const dir = await fs.opendir(targetDir);
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      console.log('dir name: ', dirent.name);
    } else {
      console.log('file name: ', dirent.name)
    }
  }
} catch (err) {
  console.error(err);
}
