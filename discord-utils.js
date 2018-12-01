module.exports = {
  getVoiceChannel
}

/**
 * Get the voice channel for message to reply
 */
function getVoiceChannel(message) {
  return message.author.bot // It's a bot
    ? message.mentions.members.first().voiceChannel
    : message.member.voiceChannel
}