import React from 'react';
import { Text } from 'react-native';

import Wrapper from './styles';
import type DisplayProps from './types';

function Display({ expression }: DisplayProps): JSX.Element {
  return (
    <Wrapper>
      <Text>{expression}</Text>
    </Wrapper>
  );
}

export default Display;
