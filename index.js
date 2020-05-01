const {Client, MessageEmbed} = require('discord.js');

const bot = new Client();

const token = process.env.token;
const PREFIX = "!";


bot.on('ready', () =>{

    console.log('This bot is online');
    bot.user.setActivity('PornHub', {type: 'WATCHING'}).catch(console.error);
  
});

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case "ping":

            break;

    }

});

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case"vote":
            const Embed = new MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Sondaggio")
            .setDescription("Digita !vote e dagli un titolo per iniziare un sondaggio nel canale, coglione.");


            if(!args[1]){
                message.channel.send(Embed);

            }
            
            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📝 " + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete({ timeout: 10, reason: 'fottiti' }).catch(console.error);
            
            });
            break;
            case"clear":
            if(!args[1]) return message.reply('Quanti messaggi vuoi cancellare imbecille?')
            message.channel.bulkDelete(args[1]);
            break;
            
    }
});


bot.on('message', msg=>{
    if(msg.content === "ehy"){
    msg.reply('CIAO COGLIONE');

}
});
bot.login(token);