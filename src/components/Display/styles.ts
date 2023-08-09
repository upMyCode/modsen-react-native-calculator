import styled from 'styled-components/native';
import {
  defaultDisplayTextColor,
  operatorDisplayTextColor,
} from 'theme/buttonTheme';

import type { ExpressionProps, ResultProps } from './types';

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  min-height: 261px;
  padding-top: 69px;
`;

const Expression = styled.Text<ExpressionProps>`
  color: ${({ type }) => {
    return type === 'operator'
      ? operatorDisplayTextColor
      : defaultDisplayTextColor;
  }};
  font-style: Poppins-Regular;
  line-height: 36px;
  font-size: 24px;
`;
const MathExpression = styled.Text`
  margin-right: 33px;
`;
const Result = styled.Text<ResultProps>`
  font-family: Poppins-Regular;
  line-height: 72px;
  font-size: 48px;
  margin-right: 33px;
  color: ${({ theme }) => {
    return theme === 'light' ? '#424242' : '#FFFFFF';
  }};
`;

export { Expression, MathExpression, Result, Wrapper };
