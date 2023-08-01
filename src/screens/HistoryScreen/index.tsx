import useIconsPack from 'hooks/useIconsPack';
import React, { useEffect, useState } from 'react';
import { History } from 'src/index';
import { useAppSelector } from 'src/store/hooks';

import DefaultScreen from '../DefaultScreen';
import Wrapper from './styles';
import type Icons from './types';

function HistoryScreen(): JSX.Element {
  const { theme } = useAppSelector((state) => {
    return state.themeReducer;
  });
  const { historyIconPackDark, historyIconPackLight } = useIconsPack(theme);
  const [themePack, setThemePack] = useState<Icons[]>(() => {
    return historyIconPackLight;
  });

  useEffect(() => {
    if (theme === 'light') {
      setThemePack(historyIconPackLight);
    } else {
      setThemePack(historyIconPackDark);
    }
  }, [theme]);
  return (
    <Wrapper>
      <DefaultScreen title="History" icons={themePack}>
        <History />
      </DefaultScreen>
    </Wrapper>
  );
}

export default HistoryScreen;
