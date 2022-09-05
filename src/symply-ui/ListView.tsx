import React from 'react';
import { Row } from './Layout';
import Text from './Text';

const ListView = (props: any) => {
  const { src, children } = props;
  return (
    <Row crossAxisAlignment="center">
      <img
        src={src}
        style={{
          width: '30px',
          height: '30px',
          marginRight: '10px',
          margin: 0,
          paddingRight: '10px',
        }}
      />
      <Text fontFamily="Barlow" lg="16px" sm="14px" color="#211E5E">
        {children}
      </Text>
    </Row>
  );
};

export default ListView;
