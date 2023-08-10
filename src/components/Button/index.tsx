import React from 'react';

import { CalculatorButton, TextContent } from './styles';
import type { ButtonProps } from './types';

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
      testID={title}
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
