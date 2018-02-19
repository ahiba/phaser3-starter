/**
 * config-overrides.js is react-app-rewired known file to override webpack
 * config hidden within create-react-app.
 *
 * This runs from node so don't use fancy smancy ES6 here.
 */
const webpack = require('webpack');
const fp = require('path');

function override(config, env) {
  config.module.rules.push({
    test: [/\.vert$/, /\.frag$/],
    use: 'raw-loader'
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      CANVAS_RENDERER: true,
      WEBGL_RENDERER: false
    })
  );

  // import pseudo-absolute paths relative to src
  config.resolve.alias['#'] = fp.join(__dirname, 'src');

  return config;
}

module.exports = override;
