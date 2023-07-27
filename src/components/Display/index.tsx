import React from 'react';
import { Text } from 'react-native';

import Wrapper from './styles';

interface DisplayProps {
  expression: string;
}

function Display({ expression }: DisplayProps): JSX.Element {
  return (
    <Wrapper>
      <Text>{expression}</Text>
    </Wrapper>
  );
}

export default Display;
