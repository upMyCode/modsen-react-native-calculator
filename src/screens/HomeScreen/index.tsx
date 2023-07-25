import React from 'react';
import { View } from 'react-native';
import { Header } from 'root';
import { Calculator } from 'root';

const HomeScreen = (): JSX.Element => {
  return (
    <View>
      <Header />
      <Calculator />
    </View>
  );
};

export default HomeScreen;
