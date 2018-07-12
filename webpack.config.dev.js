const { Config } = require('webpack-config');

const devConfig = { mode: 'development' };

// Does not work
module.exports = new Config()
  .extend('webpack.config.js')
  .merge(devConfig);

// Works
// const base = require('./webpack.config');
// module.exports = Object.assign(base, devConfig);