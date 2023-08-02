import styled from 'styled-components/native';
import {
  defaultDisplayTextColor,
  operatorDisplayTextColor,
} from 'theme/buttonTheme';

import type { ExpressionProps } from './types';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

export { Expression, Wrapper };
