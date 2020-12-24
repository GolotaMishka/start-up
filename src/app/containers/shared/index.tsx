import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { signUpPath, signInPath, appPath } from 'app/constants/url';

import SignUpContainer from './sign-up';
import SignInContainer from './sign-in';

const Shared = () => {
  return (
    <Switch>
      <Route path={signUpPath} component={SignUpContainer} />
      <Route path={signInPath} component={SignInContainer} />
      <Redirect to={appPath} />
    </Switch>
  );
};

export default Shared;
