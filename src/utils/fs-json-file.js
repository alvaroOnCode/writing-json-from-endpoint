// Packages
import path from 'path';
import fs from 'fs';

const getFileName = (endpoint) => {
  if (!endpoint) return 'error_in_file_name';

  const fileName = endpoint
    .split('?')
    .join('__')
    .split('&')
    .join('--')
    .split('/')
    .join('_')
    .split('=')
    .join('-')
    .replace('._', '.');

  return `${fileName}.json`;
};

export const resetOutputDirectory = (dir) => {
  if (!dir) return;

  return new Promise((resolve, reject) => {
    let unlinked = 0;

    fs.readdir(dir, (error, files) => {
      if (error) {
        reject(error);
      }

      if (files.length === 0) {
        resolve({
          success: true,
          message: 'Directory is already empty!'
        })
      }

      files.forEach((file, i) => {
        fs.unlink(path.join(dir, file), err => {
          if (err) {
            reject(err);
          }
        });

        unlinked = i + 1;
      });

      if (unlinked === files.length) {
        return resolve({
          success: true,
          message: 'Directory is clean!'
        });
      }

      return reject({
        success: false,
        message: 'Directory could not be cleaned!'
      });
    });
  });
};

export const writeJSON = (dir, endpoint, data) => {
  if (!dir || !endpoint || !data) return;

  const fileName = getFileName(`${endpoint.hostname}.${endpoint.path}`);
  const filePath = path.join(dir, fileName);

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        reject(error);
      }

      resolve(`Data written to ${fileName}!`);
    });
  });
};
