import React from 'react';
import { Pressable } from 'react-native';
import { Info, Wrapper, ManageSettingsImg, ManageSettingsButton } from './styles';

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Info>Modsen Calculator</Info>
      <ManageSettingsButton>
        <ManageSettingsImg source={require('../../assets/img/Settings.png')} />
      </ManageSettingsButton>
    </Wrapper>
  );
};

export default Header;
