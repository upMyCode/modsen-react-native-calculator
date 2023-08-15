import Theme from 'context/ThemeContext';
import React from 'react';
import { Header } from 'src/index';
import { useAppSelector } from 'src/store/hooks';
import { themeColorDark, themeColorLight } from 'theme/buttonTheme';

import Wrapper from './styles';
import type { DefaultScreenProps } from './types';

function DefaultScreen({
  children,
  title,
  icons,
}: DefaultScreenProps): JSX.Element {
  const { theme } = useAppSelector((state) => {
    return state.themeReducer;
  });

  return (
    <Theme.Provider
      value={theme === 'light' ? themeColorLight : themeColorDark}
    >
      <Wrapper theme={theme}>
        <Header title={title} icons={icons} />
        {children}
      </Wrapper>
    </Theme.Provider>
  );
}

export default DefaultScreen;
