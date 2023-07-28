import styled from 'styled-components/native';

interface CalculatorButtonProps {
  bgColor: string;
  width: string;
  height: string;
  radius: string;
}
interface TextContentProps {
  textColor: string;
  size: string;
}

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
  font-weight: 500;
`;

export { CalculatorButton, TextContent };
