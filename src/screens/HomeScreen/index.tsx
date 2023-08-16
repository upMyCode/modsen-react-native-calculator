import useIconsPack from 'hooks/useIconsPack';
import React, { useEffect, useState } from 'react';
import { Calculator } from 'root';
import { useAppSelector } from 'src/store/hooks';

import DefaultScreen from '../DefaultScreen';
import Wrapper from './styles';
import type Icons from './types';

function HomeScreen(): JSX.Element {
  const { theme } = useAppSelector((state) => {
    return state.themeReducer;
  });
  const { homeIconPackLight, homeIconPackDark } = useIconsPack(theme);
  const [themePack, setThemePack] = useState<Icons[]>(() => {
    return homeIconPackLight;
  });

  useEffect(() => {
    if (theme === 'light') {
      setThemePack(homeIconPackLight);
    } else {
      setThemePack(homeIconPackDark);
    }
  }, [theme]);

  return (
    <Wrapper>
      <DefaultScreen title="Modsen Calculator" icons={themePack}>
        <Calculator />
      </DefaultScreen>
    </Wrapper>
  );
}

export default HomeScreen;
