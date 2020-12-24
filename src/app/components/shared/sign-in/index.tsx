import React from 'react';

import { Row, Col, Text } from 'ui';

import s from './styles.scss';

const SignIn: React.FC = () => {
  return (
    <div className={s.page}>
      <Row>
        <Col>
          <Text size={Text.sizes.xxl} weight={Text.weights.semiBold} color={Text.colors.white}>
            Sign - in
          </Text>
        </Col>
      </Row>
    </div>
  );
};
export default SignIn;
