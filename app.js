const { bot, logMessage } = require("./index");

const helpMessage = `
Say thomething to me:
/start - starts the bot
/help - command refference
/echo - echo command
/echo [Text argument]
`;

bot.use((ctx, next) => {
  logMessage(ctx);
  next();
});
bot.start((ctx) => {
  ctx.reply("Assalomu alaykum botimizga xush kelibsiz!");
  ctx.reply(helpMessage);
});
bot.help((ctx) => {
  ctx.reply(helpMessage);
});
bot.command("echo", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");

  let message = "";

  if (inputArray.length == 1) {
    message = "You said echo";
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
  }

  ctx.reply(message);
});
bot.launch();
