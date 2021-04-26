const { config, Telegraf, bot, logMessage } = require("./index");

bot.use((ctx, next) => {
  logMessage(ctx);
  next();
});

bot.launch();
