import React from 'react';
import { View } from 'react-native';
import {
  ContainerAside,
  ContainerMiddleBottom,
  ContainerMiddleCenter,
  ContainerMiddleTop,
  ContainerTop,
} from 'root';
import { useAppSelector } from 'src/store/hooks';

import { KeyCupContainer, Wrapper } from './styles';
import type KeypadProps from './types';

function Keypad({ handleSetMathExpression }: KeypadProps): JSX.Element {
  const { theme } = useAppSelector(state => {
    return state.themeReducer;
  });
  return (
    <Wrapper>
      <ContainerTop
        theme={theme}
        handleSetMathExpression={handleSetMathExpression}
      />
      <KeyCupContainer>
        <View>
          <ContainerMiddleTop
            theme={theme}
            handleSetMathExpression={handleSetMathExpression}
          />
          <ContainerMiddleCenter
            theme={theme}
            handleSetMathExpression={handleSetMathExpression}
          />
          <ContainerMiddleBottom
            theme={theme}
            handleSetMathExpression={handleSetMathExpression}
          />
        </View>
        <ContainerAside
          theme={theme}
          handleSetMathExpression={handleSetMathExpression}
        />
      </KeyCupContainer>
    </Wrapper>
  );
}

export default Keypad;
