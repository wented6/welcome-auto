const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');


const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();



    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("515175025016307722");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(` 𝐖elcome 𝐓o , **Peace**`), 4000)
}
});



    console.log("oNNN2");
p2.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("515175025016307722");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`Benvenuto alla **Peace** ..`), 4000)
}
});



      console.log("oNNN3");
p3.on('guildMemberAdd', member => {
  const fuli= member.guild.channels.get("515175025016307722");
  if(!fuli) return;
  if(fuli) {
  setTimeout(() => fuli.send(`𝐖elcome 𝐓o , **Peace**`), 4000)
}
});












p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);

