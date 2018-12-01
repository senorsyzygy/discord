const utils = require('../utils'),
  config = require('../config'),
  discordUtils = require('../discord-utils');

const audioFolders = ['pussy', 'whiteman'];
const disconnectTimeout = config.audio.disconnectTimeout;

module.exports = {
  commands: [
    ...audioFolders.map(dir => genericAudioPlayer(dir, dir)),
    disconnectAll()
  ]
}

/**
 * returns a command object based on directory
 * @param {*} dir
 */
function genericAudioPlayer(dir, help) {
  return {
    key: dir,
    handler: async (message) => {
      await playAudio(dir, message);
    },
    help: help
  };
}

function disconnectAll() {
  return {
    key: 'stop',
    handler: async (message, client) => {
      const cons = client.voiceConnections;
      cons.forEach((v, k) => v.disconnect());
    },
    help: 'Disconnect from all channels'
  }
}

async function playAudio(dir, message) {
  return new Promise(async (resolve, reject) => {
    try {
      const vc = discordUtils.getVoiceChannel(message);
      const files = utils.getAllFilesRecursive(utils.fromAudioRoot(dir));

      const con = await vc.join()
      const listener = con.playFile(files.crandom());
      setTimeout(() => con.disconnect(), disconnectTimeout);
      listener.on('end', () => {
        setTimeout(() => con.disconnect(), disconnectTimeout)
        resolve();
      });
      listener.once('error', (err) => {
        con.disconnect();
        reject(err);
      });
    } catch (err) {
      reject(err);
    }
  });
}