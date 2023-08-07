import React from 'react';
import { View } from 'react-native';
import {
  ContainerAside,
  ContainerMiddleBottom,
  ContainerMiddleCenter,
  ContainerMiddleTop,
  ContainerTop,
} from 'root';

import { KeyCupContainer, Wrapper } from './styles';
import type KeypadProps from './types';

function Keypad({ handleSetMathExpression }: KeypadProps): JSX.Element {
  return (
    <Wrapper>
      <ContainerTop handleSetMathExpression={handleSetMathExpression} />
      <KeyCupContainer>
        <View>
          <ContainerMiddleTop
            handleSetMathExpression={handleSetMathExpression}
          />
          <ContainerMiddleCenter
            handleSetMathExpression={handleSetMathExpression}
          />
          <ContainerMiddleBottom
            handleSetMathExpression={handleSetMathExpression}
          />
        </View>
        <ContainerAside handleSetMathExpression={handleSetMathExpression} />
      </KeyCupContainer>
    </Wrapper>
  );
}

export default Keypad;
