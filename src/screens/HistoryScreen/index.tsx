import React from 'react';
import { History } from 'root';

import { Bin, Moon } from '../../assets';
import DefaultScreen from '../DefaultScreen';
import Wrapper from './styles';

function HistoryScreen(): JSX.Element {
  return (
    <Wrapper>
      <DefaultScreen title="History" icons={[Moon, Bin]}>
        <History />
      </DefaultScreen>
    </Wrapper>
  );
}

export default HistoryScreen;
