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

let audioPlayerLock = false;

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

/**
 * Disconnect from all voice channels
 */
function disconnectAll() {
  return {
    key: 'stop',
    handler: async (message, client) => {
      const cons = client.voiceConnections;
      cons.forEach((v, k) => v.disconnect());
      audioPlayerLock = false;
    },
    help: 'Disconnect from all channels'
  }
}

async function playAudio(dir, message) {
  if(audioPlayerLock) {
    return Promise.reject("Currently busy ...");
  }

  audioPlayerLock = true;

  return new Promise(async (resolve, reject) => {
    try {
      const vc = discordUtils.getVoiceChannel(message);
      const files = utils.getAllFilesRecursive(utils.fromAudioRoot(dir));
      const file = utils.fromAudioRoot(dir, files.crandom())

      const con = await vc.join()
      const listener = con.playFile(file);
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
    } finally {
      audioPlayerLock = false;
    }
  });
}