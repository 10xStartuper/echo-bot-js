const Telegraf = require("telegraf");
const { config } = require("./config");
const bot = new Telegraf(config.token);
const { logMessage } = require("./log");

module.exports = {
  config,
  Telegraf,
  bot,
  logMessage,
};
