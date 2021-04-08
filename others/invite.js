const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["i"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(`

[Click here](https://discord.com/oauth2/authorize?client_id=823845198559051806&permissions=70282305&scope=bot) **to invite the bot.**
`)

  
   .setColor("YELLOW");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
