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

  // Get he word after prefix, e.g. ">stop" will return "stop"
  const content = message.content.split(' ')[0].slice(prefix.length);
  const command = commandMap[content];

  if(!command) return;

  command.handler(message, client)
    .then(() => {
      console.log(`Executed ${content} command`);
    }).catch(err => {
      message.react('%E2%9D%8C').catch((er) => console.error("Failed to react", er));
      console.error(`Failed to successfully execute ${content}`, err);
    });
});

// Login to the bot
login();

function buildCommandMap(commands) {
  const result = {};
  for(let commandFile of commands) {
    // each command file has an array of commands
    for(let command of commandFile.commands) {
      result[command.key] = command;
    }
  }

  return result;
}
 
function login() {
  client.login(config.token);
}
