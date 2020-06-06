const Core = require("./src/core");
module.exports = async function (params) {
  await Core(params);
  return true;
};