const path = require('path');

const paths = {};

paths.root = path.resolve(__dirname, '..');
paths.nodeModules = path.join(paths.root, 'node_modules');
paths.src = path.join(paths.root, 'src');
paths.app = path.join(paths.src, 'app');
paths.ui = path.join(paths.src, 'ui');
paths.data = path.join(paths.src, 'data');
paths.outputPath = path.join(paths.root, 'dist');
paths.entryPoint = path.join(paths.app, 'index.tsx');
paths.scss = path.join(paths.app, 'styles');
paths.publicFiles = path.join(paths.root, 'public');
paths.appConfig = path.join(paths.src, 'config', `${process.env.PROJECT_ENV || 'development'}.js`);
paths.dataConfig = path.join(paths.data, 'config', `${`${process.env.PROJECT_ENV || 'development'}.ts`}`);
paths.storybook = path.join(paths.ui, 'stories');

module.exports = paths;
