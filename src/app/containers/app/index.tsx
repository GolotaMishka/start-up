import React from 'react';
import { Link } from 'react-router-dom';
import { signUpPath } from 'app/constants/url';

const AppContainer = () => {
  return (
    <div>
      Home page
      <Link to={signUpPath}>Sign up</Link>
    </div>
  );
};

export default AppContainer;
