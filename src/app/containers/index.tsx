import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import { basePath, appPath } from 'app/constants/url';

import Shared from './shared';
import App from './app';

const StartUp = () => {
  return (
    <Switch>
      <Route path={appPath} component={App} />
      <Route path={basePath} component={Shared} />
    </Switch>
  );
};

export default hot(StartUp);
