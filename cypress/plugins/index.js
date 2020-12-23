const wp = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
  const options = {
    webpackOptions: {
      mode: 'development',
      // make sure the source maps work
      devtool: 'eval-source-map',
      resolve: {
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            // every time webpack sees a TS file (except for node_modules)
            // webpack will use "ts-loader" to transpile it to JavaScript
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/typescript'],
                },
              },
            ],
          },
        ],
      },
    },
  };
  on('file:preprocessor', wp(options));
};
