const webpack = require('webpack');
const path = require('path');
const paths = require('../../../config/paths');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    rootMode: 'upward',
  },
};

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: {
      config: paths.appConfig,
      static: paths.publicFiles,
      public: paths.publicFiles,
      ui: paths.ui,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.join(paths.ui, 'styles')],
              },
            },
          },
        ],
      },
      {
        include: [paths.publicFiles],
        loader: 'file-loader',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
