import React, { ReactNode, ReactElement, FC } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParams } from '../../../App';
import { Info, ManageSettingsContainer, Wrapper } from './styles';
import { SvgProps } from 'react-native-svg';

interface HeaderProps {
  title: string;
  icons: FC<SvgProps>[];
}
function Header({ title, icons }: HeaderProps): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const handleNavigate = () => {
    navigation.navigate('History');
  };
  return (
    <Wrapper>
      <Info>{title}</Info>
      <ManageSettingsContainer>
        {icons.map((Icon: FC<SvgProps>) => (
          <Pressable onPress={handleNavigate}>
            <Icon width={32} height={32} />
          </Pressable>
        ))}
      </ManageSettingsContainer>
    </Wrapper>
  );
}

export default Header;
