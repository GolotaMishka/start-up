const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    rootMode: 'upward',
  },
  // presets: ['@babel/preset-typescript'],
};

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['react-hot-loader/patch', paths.entryPoint],
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: path.join('js', '[name].js'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules', paths.nodeModules, paths.app],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      config: paths.appConfig,
      dataConfig: paths.dataConfig,
      static: paths.publicFiles,
      public: paths.publicFiles,
      ui: paths.ui,
      data: paths.data,
      app: paths.app,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [babelLoader, { loader: 'ts-loader' }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader],
      },
      {
        test: /\.svg$/,
        exclude: [paths.publicFiles],
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
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
                includePaths: [paths.scss, paths.storybook],
              },
            },
          },
        ],
      },
      {
        include: [paths.publicFiles],
        exclude: [path.join(paths.publicFiles, 'index.html')],
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.publicFiles, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
};
