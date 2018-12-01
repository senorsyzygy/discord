const commands = ['./play-audio', './play-image'];

module.exports = {
  commands: [commands.map(require)]
};
