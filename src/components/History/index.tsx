import React from 'react';
import { Text } from 'react-native';

import Wrapper from './styles';

function History(): JSX.Element {
  const title = 'History';
  return (
    <Wrapper>
      <Text>{title}</Text>
    </Wrapper>
  );
}

export default History;
