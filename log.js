const { config } = require("./config");
function logMessage(ctx) {
  ctx.telegram.forwardMessage(
    config.group_id,
    ctx.message.chat.id,
    ctx.message.message_id
  );
}
module.exports = {
  logMessage,
};
