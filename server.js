const express = require('express');
const path = require('path');
const compression = require('compression');
const appPaths = require('./config/paths');

const port = process.env.PORT || 5000;
const app = express();

app.use(compression());

// app.use('/ui', express.static(uiPaths.storybook));

app.use(express.static(appPaths.outputPath));
app.get('/*', (_, res) => res.sendFile(path.join(appPaths.outputPath, 'index.html')));

app.listen(port, () => console.log(`App is now running on ${port}`));
