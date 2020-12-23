const express = require('express');
const path = require('path');
// const request = require('request');

// const uiPaths = require('@qit/ui/config/paths');

const compression = require('compression');
const appPaths = require('../config/paths');
const sslMiddleWare = require('./ssl.middleware');

const port = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(sslMiddleWare);
}
app.use(compression());

if (process.env.NODE_ENV === 'development') {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
}

// app.use('/ui', express.static(uiPaths.storybook));

app.use(express.static(appPaths.outputPath));
app.get('*', (_, res) => res.sendFile(path.join(appPaths.outputPath, 'index.html')));

app.listen(port, () => console.log(`App is now running on ${port}`));
