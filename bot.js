const D1 = require('discord.js');




const p1 = new D1.Client();






    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("521408680600797204");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Bienvenue To Dmm ..**`), 4000)
}
});













p1.login(process.env.B);
