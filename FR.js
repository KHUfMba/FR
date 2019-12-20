const Discord = require("discord.js");
const bot = new Discord.Client()
let prefix = "-";

bot.on("ready", () => {
console.log(`Logged in with name: ${bot.user.username}`)
bot.user.setGame(`${prefix}bc | Brodcast.`, "https://twitch.tv/𝚇𝙼𝟻𝟶𝟼#8991")
})

bot.on("message", message => {
let messageArray = message.content.split(" ")
let content = messageArray.slice(prefix.length).join(" ")
let chat = messageArray[0].toLowerCase()
 if(message.author.id === bot.user.id) return;
 if(message.channel.type === "dm") return message.channel.send("ارسل ف السيرفر يا حمار 😡")

  if(chat === prefix + "bc"){
  if(!content[0]) return message.reply("there is no brodcast to send :)")
  message.guild.members.forEach(member => {
  let messagecontent = `${message.guild.name} Brodcast ! \n \n------------- \n \n${content} \n \n------------- \n \nمع تحيات ادارة السيرفر لكم <3`;
member.send(`${messagecontent}`).catch(console.error)

  })
return message.reply("تم ارسال البرودكاست ب نجاح ✅:)")
}


})

bot.login("NjU3NjMxNTYzOTAyNjE1NTU1.Xf0uhQ.QI-2InGUwvUh8C4dl7E4iJ1Mtno")
