const path = require("path");

module.exports = ({mode}) => {
  if (mode === 'development') {
    return require('./webpack.config.dev')
  }
  return require('./webpack.config.prod')
};