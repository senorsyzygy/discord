const utils = require('../utils');

const imageFolders = ['kapkan', 'tachanka', 'other'];

module.exports = {
  commands: [
    ...imageFolders.map(dir => genericImagePlayer(dir, dir))
  ]
}

/**
 * returns a command object based on directory
 * @param {*} dir
 */
function genericImagePlayer(dir, help) {
  return {
    key: dir,
    handler: async (message) => {
      const files = utils.getAllFilesRecursive(utils.fromImageRoot(dir));
      await message.channel.send({ files: [files.crandom()] })
    },
    help: help
  };
}