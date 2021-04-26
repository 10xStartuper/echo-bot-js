const { config } = require("../config");
function logMessageToGroup(ctx) {
  ctx.telegram.forwardMessage(
    config.group_id,
    ctx.message.chat.id,
    ctx.message.message_id
  );
}
module.exports = {
  logMessage: logMessageToGroup,
};
