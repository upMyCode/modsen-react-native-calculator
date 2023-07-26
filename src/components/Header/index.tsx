import React from 'react';
import { Settings } from '../../assets';
import { Info, Wrapper, ManageSettingsButton } from './styles';

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Info>Modsen Calculator</Info>
      <ManageSettingsButton>
        <Settings width={32} height={32} />
      </ManageSettingsButton>
    </Wrapper>
  );
};

export default Header;
