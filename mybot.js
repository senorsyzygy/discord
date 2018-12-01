const Discord = require("discord.js");
const client = new Discord.Client();

Object.defineProperty(Array.prototype, 'crandom', { value: function() {

  let index = Math.floor(Math.random() * this.length);

  return this[index];
}
});
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith(">mounted")) {
    message.channel.send("and loaded! https://i.imgur.com/Bh0knbe.gifv");
  }
else if (message.content.startsWith(">lmg")) {
  message.member.voiceChannel.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\2.wav");
    listener.on('end', () => setTimeout(() => con.disconnect(), 2000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">blackbeard")) {
  message.channel.send({files: ["D:\\Tachanka\\3.jpeg"]});
}
else if (message.content.startsWith(">praise")) {
  message.channel.send("The lord! {-}7", {files: ["D:\\Tachanka\\1.jpg"]})
}
else if (message.content.startsWith(">haters")) {
  message.channel.send("Here's what happens to people who doubt Chanka https://i.imgur.com/O3LDGI3.gifv")
}
else if (message.content.startsWith(">god")) {
  message.channel.send({files: ["D:\\Tachanka\\3.jpg"]});
}
else if (message.content.startsWith(">buff")) {
  message.channel.send({files: ["D:\\Tachanka\\4.jpg"]});
}
else if (message.content.startsWith(">sleep")) {
  message.channel.send({files: ["D:\\Tachanka\\sleep.jpg"]});
}
else if (message.content.startsWith(">mira")) {
  message.channel.send({files: ["D:\\Tachanka\\mira.jpg"]});
}
else if (message.content.startsWith(">stay")) {
  message.member.voiceChannel.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\1.mp3");
    listener.on('end', () => setTimeout(() => con.disconnect(), 2000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">pack")) {
  message.member.voiceChannel.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\3.mp3");
    listener.on('end', () => setTimeout(() => con.disconnect(), 3000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">love")) {
  message.channel.send({files: ["D:\\Tachanka\\5.jpg"]});
}
else if (message.content.startsWith(">sing")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\5.mp3");
    setTimeout(() => con.disconnect(), 5000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 5000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">anthem")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\6.mp3");
    setTimeout(() => con.disconnect(), 7500);
    listener.on('end', () => setTimeout(() => con.disconnect(), 7500));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">exposed")) {
  message.member.voiceChannel.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\7.mp3");
    setTimeout(() => con.disconnect(), 12500);
    listener.on('end', () => setTimeout(() => con.disconnect(), 12500));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">stop")) {
  message.member.voiceChannel.leave()
}
else if (message.content.startsWith(">list")) {
  message.channel.sendMessage('```\n>love\n>mounted\n>god\n>sing\n>pack\n>stay\n>blackbeard\n>buff\n>praise\n>lmg\n>anthem\n>exposed\n>russianroulette\n>tendies\n>wilhelm\n>fart\n>kapkan\n>out\n>fuze\n>sleep\n>mira\n>white\n>excuse\n>iranianflirting```');
}
else if (message.content.startsWith(">69")) {
  message.member.voiceChannel.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\8.mp3");
    setTimeout(() => con.disconnect(), 11000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 11000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">tendies")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\9.mp3");
    setTimeout(() => con.disconnect(), 9000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 9000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">russianroulette")) {
  message.channel.send({files: ["D:\\Tachanka\\roulette.jpg"]});
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const filepath = ["D:\\Tachanka\\1.mp3", "D:\\Tachanka\\2.wav", "D:\\Tachanka\\3.mp3", "D:\\Tachanka\\5.mp3", "D:\\Tachanka\\6.mp3", "D:\\Tachanka\\7.mp3", "D:\\Tachanka\\8.mp3", "D:\\Tachanka\\9.mp3", "D:\\Tachanka\\10.mp3", "D:\\Tachanka\\11.mp3", "D:\\Tachanka\\12.mp3", "D:\\Tachanka\\13.mp3", "D:\\Tachanka\\14.mp3"].crandom()
    const listener = con.playFile(filepath);
    setTimeout(() => con.disconnect(), 9000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 9000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">wilhelm")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\10.mp3");
    setTimeout(() => con.disconnect(), 3000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 3000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">fart")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\11.mp3");
    setTimeout(() => con.disconnect(), 3000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 3000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">kapkan")) {
  message.channel.send({files: ["D:\\Tachanka\\kapkan.jpg"]});
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\12.mp3");
    setTimeout(() => con.disconnect(), 7000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 7000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">out")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\13.mp3");
    setTimeout(() => con.disconnect(), 3000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 3000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">fuze")) {
  message.channel.send({files: ["D:\\Tachanka\\fuze.jpg"]});
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\14.mp3");
    setTimeout(() => con.disconnect(), 7000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 7000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">white")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\whiteman.mp3");
    setTimeout(() => con.disconnect(), 4000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 4000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">excuse")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\excuse.mp3");
    setTimeout(() => con.disconnect(), 4000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 4000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">iranianflirting")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\flirting.mp3");
    setTimeout(() => con.disconnect(), 4000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 4000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">shrapnel")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\shrapnel.mp3");
    setTimeout(() => con.disconnect(), 4000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 4000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
else if (message.content.startsWith(">pussy")) {
  const vc = message.author.bot // It's a bot
  ? message.mentions.members.first().voiceChannel
  : message.member.voiceChannel

if(!vc) return;
  vc && vc.join().then(con => {
    const listener = con.playFile("D:\\Tachanka\\pussy.mp3");
    setTimeout(() => con.disconnect(), 4000);
    listener.on('end', () => setTimeout(() => con.disconnect(), 4000));
    listener.once('error', (err) => {
      console.log(err);
      con.disconnect();
    });
    }).catch(err => console.error(err));
}
});


 
client.login("NTE2MDI4NjE3NTg3Njg3NDQz.Dtt1fw.HxaWMRb3_VHJFK_YICm-WSznIk4");