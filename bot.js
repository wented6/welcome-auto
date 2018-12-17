const Discord = require('discord.js'),
    meercy = new Discord.Client({sisableEveryone: true})
    console.log("oNNN");
meercy.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("515944328921874432");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(` 𝐖elcome 𝐓o , **Universe.**`), 4000)
}
});
meercy.login(process.env.WE);
