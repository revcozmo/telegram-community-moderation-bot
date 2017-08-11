// initialisation of the bot
var init = require("./init");

const TelegramBot = require('node-telegram-bot-api');
/*
** get the telegram token which looks something
** like 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
**
** IMPORTANT:
** To setup your real bot copy the file init_example.js to init.js and set your
** real bot token there as explained
*/
const token = init.getToken();
const bot = new TelegramBot(token, { polling: true });

// CODE
bot.on('message', (msg) => {
  var Hi = "hi";
  if (msg.text.toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
    console.log("Sent a hello message to the user " + msg.from.first_name);
  }
  var bye = "bye";
  if (msg.text.toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  }
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + "\n\nThis bot is still under development and not ready to use for the public.\n\nJoin @CommunityModerationBotNews for development announcements and keep moderating your group/ channel by hand.\n\nCheers,\n@rogersc");
  });
});
