/**
 * config-overrides.js is react-app-rewired known file to override webpack
 * config hidden within create-react-app.
 *
 * This runs from node so don't use fancy smancy ES6 here.
 */
const webpack = require('webpack');

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

  return config;
}

module.exports = override;
