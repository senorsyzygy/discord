const path = require('path'),
  fs = require('fs'),
  config = require('./config');

module.exports = {
  fromImageRoot,
  fromAudioRoot,
  getAllFilesRecursive
}

/**
 * Get all files recursively in directory and subdirectories
 * @param srcPath source path
 */
function getAllFilesRecursive(srcPath) {
  const items = fs.readdirSync(srcPath);
  const folders = [];
  const files = []

  for (const item of items) {
    if (fs.statSync(path.join(srcPath, item)).isDirectory()) {
      folders.push(item)
    } else {
      files.push(item);
    }
  }

  for(let folder of folders) {
     files.push.apply(files, getAllFilesRecursive(path.join(srcPath, folder))
        .map(item => path.join(folder, item)));
  }

  return files;
}

/**
 * Get the full dir from images root path
 * @param _config configuration
 * @param subpaths additional subpaths
 */
function fromImageRoot(...dirs) {
    return fromRoot(config.images, ...dirs);
}

function fromAudioRoot(...dirs) {
    return fromRoot(config.audios, ...dirs);
}

function fromRoot(...dirs) {
  return path.join(config.root, ...dirs)
}