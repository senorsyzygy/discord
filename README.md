# Tachanka Bot

# Configuration
Docs coming soon
Rename [config.secret.json.template](./config.secret.json.template) to config.secret.json and place your tokens and other env
specific information in there. You can override anything in [config.json](./config.json) in there.


# Command structure:

each command object has two attributes:

- key: the message to look for
- handler: the handler function which takes in a Message and returns a Promise
- helper: string showing help for that command


# Previous version

It is all now in [garbage file](./garbage.js) and should be migrated carefully