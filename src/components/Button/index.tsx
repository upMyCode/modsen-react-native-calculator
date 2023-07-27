import React from 'react';

import { CalculatorButton, TextContent } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor: string;
  textColor: string;
  height: string;
  width: string;
  radius: string;
  size: string;
}

function Button({
  title,
  onPress,
  bgColor,
  textColor,
  height,
  width,
  radius,
  size,
}: ButtonProps): JSX.Element {
  return (
    <CalculatorButton
      onPress={onPress}
      bgColor={bgColor}
      width={width}
      height={height}
      radius={radius}
    >
      <TextContent size={size} textColor={textColor}>
        {title}
      </TextContent>
    </CalculatorButton>
  );
}

export default Button;
