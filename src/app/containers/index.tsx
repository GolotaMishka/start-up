import React from 'react';
import { hot } from 'react-hot-loader/root';
import AppComponent from 'app/components';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return <AppComponent />;
  }
}

export default hot(App);
