import React from 'react';

import { Row, Col, Text } from 'ui';

import s from './styles.scss';

const App: React.FC = () => {
  return (
    <div className={s.page}>
      <Row>
        <Col>
          <Text size={Text.sizes.xxl} weight={Text.weights.semiBold} color={Text.colors.white}>
            Fucker, mother fucker(TEST1)
          </Text>
        </Col>
      </Row>
    </div>
  );
};
export default App;
