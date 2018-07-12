const serve = require('webpack-serve');
const config = require('../webpack.config.dev.js');

const argv = {};

console.log(config)

serve(argv, { config }).then((result) => {
  // ...
});
