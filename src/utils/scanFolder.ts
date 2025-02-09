import fs from 'fs';
import path from 'path';

const docsPath = path.resolve(process.cwd(), 'src', 'docs');

if (fs.existsSync(docsPath)) {
  console.log(`Scanning folder: ${docsPath}`);

  const items = fs.readdirSync(docsPath, { withFileTypes: true });

  items.forEach((item) => {
    if (item.isDirectory()) {
      console.log(`Folder: ${item.name}`);
    } else if (item.isFile()) {
      console.log(`File: ${item.name}`);
    }
  });
} else {
  console.warn('The src/docs folder does not exist.');
}