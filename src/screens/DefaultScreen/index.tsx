import React, { ReactElement, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Header } from 'src/index';
import { useAppSelector } from 'src/store/hooks';

import Wrapper from './styles';

interface Icons {
  Icon: ImageSourcePropType;
  onPress: () => void;
  id: string;
}
interface DefaultScreenProps {
  children: ReactNode[] | ReactElement;
  icons: Icons[];
  title: string;
}
function DefaultScreen({
  children,
  title,
  icons,
}: DefaultScreenProps): JSX.Element {
  const { theme } = useAppSelector(state => state.themeReducer);
  return (
    <Wrapper theme={theme}>
      <Header title={title} icons={icons} />
      {children}
    </Wrapper>
  );
}

export default DefaultScreen;
