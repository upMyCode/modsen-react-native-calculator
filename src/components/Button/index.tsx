import React from 'react';
import { ListRenderItem } from 'react-native';
import { CalculatorButton, TextContent } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor: string;
  textColor: string;
  height: string;
  width: string;
  radius: string;
}

const Button = ({
  title,
  onPress,
  bgColor,
  textColor,
  height,
  width,
  radius,
}: ButtonProps): JSX.Element => {
  return (
    <CalculatorButton
      onPress={onPress}
      bgColor={bgColor}
      width={width}
      height={height}
      radius={radius}
    >
      <TextContent textColor={textColor}>{title}</TextContent>
    </CalculatorButton>
  );
};

export default Button;
