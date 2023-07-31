import React from 'react';
import { Header } from 'src/index';
import { useAppSelector } from 'src/store/hooks';

import Wrapper from './styles';
import type { DefaultScreenProps } from './types';

function DefaultScreen({
  children,
  title,
  icons,
}: DefaultScreenProps): JSX.Element {
  const { theme } = useAppSelector(state => {
    return state.themeReducer;
  });
  return (
    <Wrapper theme={theme}>
      <Header title={title} icons={icons} />
      {children}
    </Wrapper>
  );
}

export default DefaultScreen;
