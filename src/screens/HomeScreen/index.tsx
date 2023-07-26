import React from 'react';
import { Wrapper } from './styles';
import { Header } from 'root';
import { Calculator } from 'root';

const HomeScreen = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Calculator />
    </Wrapper>
  );
};

export default HomeScreen;
