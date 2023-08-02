import React from 'react';
import { Text } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

import { Expression, Wrapper } from './styles';
import type { DisplayProps } from './types';

function Display({ expression }: DisplayProps): JSX.Element {
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
      <Text>{reconstructionExpression(expression)}</Text>
    </Wrapper>
  );
}

export default Display;
