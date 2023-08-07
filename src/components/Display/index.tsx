import React from 'react';
import { Text } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

import { Expression, Result, Wrapper } from './styles';
import type { DisplayProps } from './types';

function Display({
  expression,
  result,
  handleLayout,
}: DisplayProps): JSX.Element {
  const { theme } = useAppSelector((state) => {
    return state.themeReducer;
  });
  const reconstructionExpression = (currentExpression: string) => {
    const expressionItems = currentExpression.match(/([\d]+)|([+*-/%()]+)/g);

    return expressionItems?.map((elem) => {
      if (/(\d+)/.test(elem)) {
        return <Expression type="default">{elem}</Expression>;
      }
      return <Expression type="operator">{elem}</Expression>;
    });
  };
  return (
    <Wrapper>
      <Text onLayout={handleLayout}>
        {reconstructionExpression(expression)}
      </Text>
      {result && <Result theme={theme}>{`=${result}`}</Result>}
    </Wrapper>
  );
}

export default Display;
