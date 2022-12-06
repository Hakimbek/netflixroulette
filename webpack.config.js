const path = require("path");

module.exports = ({ mode }) => {
  return mode === "development"
    ? require("./webpack.config.dev")
    : require("./webpack.config.prod");
};
