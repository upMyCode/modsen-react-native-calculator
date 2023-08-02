import styled from 'styled-components/native';

import type { CalculatorButtonProps, TextContentProps } from './types';

const CalculatorButton = styled.TouchableOpacity<CalculatorButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  width: ${({ width }) => {
    return `${width}px`;
  }};
  height: ${({ height }) => {
    return `${height}px`;
  }};
  border-radius: ${({ radius }) => {
    return `${radius}px`;
  }};
`;

const TextContent = styled.Text<TextContentProps>`
  color: ${({ textColor }) => {
    return textColor;
  }};
  font-size: ${({ size }) => {
    return `${size}px`;
  }};
  font-family: 'Poppins-Medium';
`;

export { CalculatorButton, TextContent };
