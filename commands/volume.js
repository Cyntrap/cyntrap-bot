const Discord = require("discord.js");

module.exports = class volume {
    constructor(){
        this.name = "volume"
        this.alias = ["v"]
        this.usage = "_volume"
    }

    async run (bot, message, args, serverQueue){
        if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
        if(!serverQueue) return message.channel.send("There is no queue");
        message.channel.send(`Current volume: ${serverQueue.volume}`);
        if(parseInt(args[1]) > 1000){
            return message.channel.send("The volume cannot be set to more than a 1000");
        }
        serverQueue.connection.dispatcher.setVolume(args[1]);
        return undefined;
    }
}