import React, { FC, ReactElement, ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';
import { Header } from 'root';

import Wrapper from './styles';

interface DefaultScreenProps {
  children: ReactNode[] | ReactElement;
  icons: FC<SvgProps>[];
  title: string;
}
function DefaultScreen({
  children,
  title,
  icons,
}: DefaultScreenProps): JSX.Element {
  return (
    <Wrapper>
      <Header title={title} icons={icons} />
      {children}
    </Wrapper>
  );
}

export default DefaultScreen;
