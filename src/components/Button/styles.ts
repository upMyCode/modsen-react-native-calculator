import styled from 'styled-components/native';

import type { CalculatorButtonProps, TextContentProps } from './types';

const CalculatorButton = styled.TouchableOpacity<CalculatorButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ radius }) => `${radius}px`};
`;

const TextContent = styled.Text<TextContentProps>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ size }) => `${size}px`};
  font-family: 'Poppins-Medium';
`;

export { CalculatorButton, TextContent };
