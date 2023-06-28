// Thanks to Im_JVallejo for the base of the code.

import keepAlive from './server.js';
import consola from './console.js';
const TOKEN = process.env['TOKEN'];

keepAlive();

import Discord from 'discord.js-selfbot-v13';
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'America/Tegucigalpa', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
   consola();

    console.log(`
        User: ${client.user.username} - rich precense started!
        Login successful, it's time to trick Vicemi!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1122699350997471392')
    .setType('STREAMING') // STREAMING, WATCHING, LISTENING, PLAYING, COMPETING or CUSTOM
    .setURL('https://www.twitch.tv/krzzlpzz') //It can be a Twitch link or a YouTube link.
    .setState('con tu mamá')
    .setName('KrzzLpzz')
    .setDetails(`jajaxd [${formatTime()}]`)
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/667162223591948308/1123333096910114956/ezgif.com-video-to-gif.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('KrzzLpzz') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1067011441414127687.gif?size=4096&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Verified') //Text when you hover the Small image
    .addButton('Github', 'https://github.com/Yukyshiram/Presencia_Activa_Streaming_Discord_CX')
    //.addButton('Creator', 'https://www.twitch.tv/krzzlpzz');
    .setStartTimestamp(Date.now())

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `jajaxd [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

client.login(TOKEN);