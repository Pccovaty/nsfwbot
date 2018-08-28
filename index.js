const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on("ready", async() => {

    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("|help", {type: "WATCHING"});
});
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

 if(cmd === "|hentai_cycki") {
    if (!message.channel.nsfw) return message.channel.send(":underage: jest to NSFW komenda. Proszę zaznacz w ustawieniach kanału NSFW ON bym mógł dać png/gif")
    const embed = new Discord.RichEmbed()
    .setTitle("Hentai o kategorii: Cycki")
    .setColor('RANDOM')
    .setImage("http://tn2.suitemovies.com/thumbs/320/815/6509815.jpg")
    .setFooter("Niestety będzie tylko jedno zdjęcie/gif ponieważ nie mam api i nie ogarnąłem jeszcze array (z góry przepraszam)")
    message.channel.send(embed)
  }
  if(cmd === "|hentai_sex") {
    if (!message.channel.nsfw) return message.channel.send(":underage: jest to NSFW komenda. Proszę zaznacz w ustawieniach kanału NSFW ON bym mógł dać png/gif")
    const embed = new Discord.RichEmbed()
    .setTitle("Hentai o kategorii: sex")
    .setColor('RANDOM')
    .setImage("https://images.sex.com/images/pinporn/2018/08/17/620/19848323.gif")
    .setFooter("Niestety będzie tylko jedno zdjęcie/gif ponieważ nie mam api i nie ogarnąłem jeszcze array (z góry przepraszam)")
    message.channel.send(embed)
  }
  if(cmd === "|hentai_dick") {
    if (!message.channel.nsfw) return message.channel.send(":underage: jest to NSFW komenda. Proszę zaznacz w ustawieniach kanału NSFW ON bym mógł dać png/gif")
    const embed = new Discord.RichEmbed()
    .setTitle("Hentai o kategorii: dick")
    .setColor('RANDOM')
    .setImage("http://besthentaipics.com/plog-content/images/best-hentai-pictures/hentai-gifs/big-cock-and-two-hentai-babes.gif")
    .setFooter("Niestety będzie tylko jedno zdjęcie/gif ponieważ nie mam api i nie ogarnąłem jeszcze array (z góry przepraszam)")
    message.channel.send(embed)
  }
  if(cmd === "|help") {
    const bicon = bot.user.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle("Szybka pomoc")
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .setDescription("komendy: \n \n |hentai_cycki \n |hentai_sex \n |hentai_dick \n |help")
    .addField("chcesz dodać bota na serwer? nic trudnego! wystarczy że odwiedzisz ten link, zaznaczysz serwer i autoryzuj! I gotowe!", ":link: https://discordapp.com/oauth2/authorize?client_id=483912852432748545&scope=bot&permissions=335560766")
    .setFooter("masz problem z botem? wejdź w ten link https://discord.gg/pppgZCV")
    message.channel.send(embed)
  }
    if(cmd === "|botinfo") {
    const bicon = bot.user.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle("Informacje dotyczące bota")
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .addField("Serwerów:", `${bot.guilds.size}`)
    .addField("Łącznie osób:", `${bot.users.size}`)
    .setFooter("masz problem z botem? wejdź w ten link https://discord.gg/pppgZCV")
    message.channel.send(embed)
  }
});

bot.login(process.env.BOT_TOKEN);
