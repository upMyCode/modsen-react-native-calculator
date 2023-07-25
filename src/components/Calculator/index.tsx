import React from 'react';
import { Display, Keypad } from 'root';
import { View } from 'react-native';

const Calculator = (): JSX.Element => {
  return (
    <View>
      <Display />
      <Keypad />
    </View>
  );
};

export default Calculator;
