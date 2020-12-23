import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'ui';
import s from './styles.scss';

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<unknown, ErrorBoundaryState> {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(e) {
    console.log(e);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className={s.warning}>
          <Text size={Text.sizes.xl}>Oops, something went wrong!</Text>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
