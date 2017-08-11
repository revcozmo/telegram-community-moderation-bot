// initialisation of the bot with it's token
(function() {
  /*
  ** Setup instructions:
  ** replace <your-bot-token-here> with your actual bot token which looks
  ** something like 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew1
  **
  ** This is your private bot token. DONT EXPOSE THIS TO THE PUBLIC BY FOR
  ** EG. PUSHING THIS FILE TO GITHUB
  */
  var token = '<your-bot-token-here>';

    module.exports.getToken = function() {
        return token;
    }

}());
