const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');


const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();



p1.on("message", message => {
  meercy = new Discord.Client({sisableEveryone: true})
    console.log("oNNN1");
meercy.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("515944328921874432");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(` 𝐖elcome 𝐓o , **Universe.**`), 4000)
}
});

p2.on("message", message => {
  meercy = new Discord.Client({sisableEveryone: true})
    console.log("oNNN2");
meercy.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("515944328921874432");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`WelCome To **Unii...**`), 4000)
}
});

p3.on("message", message => {
    meercy = new Discord.Client({sisableEveryone: true})
      console.log("oNNN3");
  meercy.on('guildMemberAdd', member => {
  const fuli= member.guild.channels.get("515944328921874432");
  if(!fuli) return;
  if(fuli) {
  setTimeout(() => fuli.send(`𝐖elcome 𝐓o , **Universe.**`), 4000)
  }
  });
  









p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
