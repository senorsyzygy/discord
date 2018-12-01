// Import libs
require('./libs');

const config = require('./config');
const Discord = require("discord.js");
const client = new Discord.Client();

const commands = require('./commands').commands;
const commandMap = buildCommandMap(commands);
const prefix = config.prefix;

client.on("ready", () => {
  console.log("Discord Online");
});

client.on("error", (err) => {
  console.error(`Discord error`, err);
  // try to login again:
  setTimeout(() => login(), 2000);
});
 
client.on("message", async (message) => {
  if(!message.content.startsWith(prefix)) {
    return; // not a bot command
  }

  const content = message.content.split(' ')[0].slice(prefix.length);
  const command = commandMap[content];

  if(!command) return;

  command.handler(message, client)
    .then(() => {
      console.log(`Executed ${content} command`);
    }).catch(err => {
      console.error(`Failed to successfully execute ${content}`, err);
    });

});

function buildCommandMap(commands) {
  const result = {};
  for(let commandFile of commands) {
    // each command file has an array of commands
    for(let command of commandFile.commands) {
      result[key] = command;
    }
  }

  return result;
}
 
function login() {
  client.login(config.token);
}
