import React from 'react';
import { Calculator } from 'root';

import { Settings } from '../../assets';
import DefaultScreen from '../DefaultScreen';
import Wrapper from './styles';

function HomeScreen(): JSX.Element {
  return (
    <Wrapper>
      <DefaultScreen title="Modsen Calculator" icons={[Settings]}>
        <Calculator />
      </DefaultScreen>
    </Wrapper>
  );
}

export default HomeScreen;
