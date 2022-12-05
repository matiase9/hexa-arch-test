import * as fs from 'fs';
export function truncateFile(file): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.truncate(file, (err) => {
      if (err) reject(err);
      else resolve('ok');
    });
  });
}

export function existsFile(file) {
  return fs.existsSync(file);
}