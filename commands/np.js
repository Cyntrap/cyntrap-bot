const Discord = require("discord.js");

module.exports = class np {
    constructor(){
        this.name = "np"
        this.alias = ["nowplaying"]
        this.usage = "_np"
    }

    async run (bot, message, args, serverQueue, queue){
        if(!serverQueue) return message.channel.send("No song is currrenly playing");

        serverQueue.textChannel.send(`🎵 **Now Playing** --> ${serverQueue.songs[0].title} 🎵`);
    }
}