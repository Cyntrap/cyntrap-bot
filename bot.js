const Discord = require("discord.js");
const fs = require("fs");
const botsettings = require("./botsettings.json")
const bot = new Discord.Client();
const prefix = botsettings.prefix;

const queue = new Map();


const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['_']
  });

global.servers = {};

bot.on("ready", async => {
    console.log("Hentai Bot is online!!")
    bot.user.setActivity("hentai", {type: "WATCHING"});
})

bot.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.equals(bot.user.username)) return;

    if(message.content == "hello"){
        message.channel.send("Hi ^-^");
    }

    let args = message.content.split(" ");
	let command = message.content.toLowerCase().split(' ')[0];
    cmd = CH.getCommand(command);
    const serverQueue = queue.get(message.guild.id);
    if(!cmd) return;
    try{
        cmd.run(bot,message,args)
    }catch(e){
        console.log(e)
    }

    return;
})

bot.login(process.env.BOT_TOKEN);