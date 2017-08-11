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

// file system


// FUNCTIONS

// log user interactions to ./log/userinteractions.log
var fs = require('fs');
var logIt = function(msg, ev) {
  fs.appendFileSync('./log/userinteractions.log', new Date().toLocaleString() + " - " + msg.chat.id + " - " + ev + " - usr: [" + msg.from.first_name + "]\n");
};


// CODE
bot.on('message', (msg) => {
  // Hello Greeting if a user sends the message "hi"
  var Hi = "hi";
  if (msg.text.toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, ":wave: Hi " + msg.from.first_name + "! How are you doing?");
    logIt(msg, "hi");
  }
  // bye message if a users sends a message which includes "bye"
  var bye = "bye";
  if (msg.text.toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you back again soon...");
  }
});
// under development notification on /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.from.id, "Hi " + msg.from.first_name + "\n\n:warning: :construction: :warning: :construction: :warning: :construction: :warning: :construction: :warning: :construction: :warning:\nThis bot is still under heavy development at [our GitHub Repo](https://github.com/sinndrin/telegram-community-moderation-bot) and not ready to be used by the public. You're welcome to :star: star, :floppy_disk: PR and :negative_squared_cross_mark: open issues to get us going.\n\n:mega: Join @CommunityModerationBotNews for development announcements and keep moderating your group/ channel by hand. :cry:\n\nIn the meantime join our discussion group :busts_in_silhouette: @CommunityModerationBotGroup and start chatting about group moderation.\n\nCheers,\n@rogersc", {parse_mode : "MARKDOWN"});
  logIt(msg, "/start");
});
// /help message
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.from.id, "Hi " + msg.from.first_name + "\n\nIf you need help with your copy of the bot, *join our discussion group* :busts_in_silhouette: @CommunityModerationBotGroup and start chatting or *subscribe to our channel* :mega: @CommunityModerationBotNews for official announcements and tutorials. \n\nCheers,\n@rogersc", {parse_mode : "MARKDOWN"});
  logIt(msg, "/help");
});
bot.onText(/\/settings/, (msg) => {
  bot.sendMessage(msg.from.id, "Hi " + msg.from.first_name + "\n\n*404 is real!* This bot is not yet ready to be set up. In the meantime *join our discussion group* :busts_in_silhouette: @CommunityModerationBotGroup and start chatting or *subscribe to our channel* :mega: @CommunityModerationBotNews for official announcements and tutorials. \n\nCheers,\n@rogersc", {parse_mode : "MARKDOWN"});
  logIt(msg, "/settings", {parse_mode : "MARKDOWN"});
});
