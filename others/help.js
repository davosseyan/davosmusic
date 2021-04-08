const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/827276822382116895/827587022809333771/image0.png`)
    .setTitle(`**Red Zone Help**`)
    .setDescription(`

**User Commands**
\`%invite\` - \`%support\` - \`%a!about\`
\`%ping\` - \`%prefix\` - \`%uptime\`

**Music Commands**
\`%play\` - \`%skip\` - \`%skipto\`
\`%stop\` - \`%volume\` - \`%nowplaying\`
\`%shuffle\` - \`%search\` - \`%resume\`
\`%remove\` - \`%queue\` - \`%filter\`
\`%loop\` - \`%lyrics\` - \`%radio\`

**Links**
[Support](https://discord.gg/nhxxXQRNMu) - [Invite](https://discord.com/oauth2/authorize?client_id=823845198559051806&permissions=70282305&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
