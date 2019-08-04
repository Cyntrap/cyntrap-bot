const Discord = require("discord.js");

module.exports = class clear{

    constructor(){
        this.name = "clear"
        this.alias = ["c"]
        this.usage = "_clear"
    }

    async run (bot, message, args){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission to do that!");
        if(!args[0]) return message.channel.send("Please provide a number!");
        message.channel.bulkDelete(args[0]).then( () => {
            message.channel.send(`Cleard ${args[0]} messages.`).then(msg => msg.delete(5000));
        });
    }

}