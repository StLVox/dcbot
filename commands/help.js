const Discord = require("discord.js");
const config = require("../storage/config.json");

module.exports = {
  name: "help",
  execute: async (message, args) => {

 var color = config.color;
 var prefix = config.prefix;

  let embed = new Discord.RichEmbed()
  .setColor(config.color)
  .setTitle(`        :ticket:\  Ticket Help Menu  :ticket:`)
  .addField(`Commands`, `**${prefix}new** » Opens a ticket`)
 

  if (message.member.roles.some(r => ["Ticket Support", "Ticket Manage"].includes(r.name)) || message.author.id === '260668078369538048') {
    embed.addField(`Ticket Support Commands`, `**${prefix}new @user** » Opens a ticket for the mentioned user \n**${prefix}rename** » Renames the ticket\n**${prefix}done** » closes the current ticket \n**${prefix}add @user #channel** » adds a user to the mentioned ticket\n **=intro** » Introduces yourself in a ticket! \n **=report** » Report template!`)
  }

  if (message.member.roles.some(r => ["Ticket Manage"].includes(r.name)) || message.author.id === '260668078369538048') {
    embed.addField(`Ticket Manage Commands`, `**${prefix}blacklist @user** » Bans a user from making tickets\n**${prefix}unblacklist @user** » Unbans a user from making tickets\n**${prefix}blacklisted** » See a list of blacklisted people from tickets
    **${prefix}pmove** » Moves to the Procced Category`)
  }

  return message.channel.send({embed: embed})
}
}