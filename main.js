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
//const bot = new TelegramBot(token, { polling: true });
const Tgfancy = require("tgfancy");
const bot = new Tgfancy(token,
  {
    // enable status update polling
    polling: true,
    // all options to 'tgfancy' MUST be placed under the
    // 'tgfancy' key, as shown below
    tgfancy: {
        emojification: true,
    },
});


// CODE
bot.on('message', (msg) => {
  // Hello Greeting if a user sends the message "hi"
  var Hi = "hi";
  if (msg.text.toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, ":wave: Hi " + msg.from.first_name + "! How are you doing?");
    console.log(new Date().toLocaleString() + ": Sent a hello message to the user " + msg.from.first_name);
  }
  // bye message if a users sends a message which includes "bye"
  var bye = "bye";
  if (msg.text.toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you back again soon...");
  }
  // under development notification on /start
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.from.id, "Hi " + msg.from.first_name + "\n\n:warning: :construction: :warning: :construction: :warning: :construction: :warning: :construction: :warning: :construction: :warning:\nThis bot is still under development and not ready to use for the public.\n\n:mega: Join @CommunityModerationBotNews for development announcements and keep moderating your group/ channel by hand. :cry:\n\nCheers,\n@rogersc");
  });
});
