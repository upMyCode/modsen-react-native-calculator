import React from 'react';
import { Image, Pressable } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

import { Info, ManageIcon, ManageSettingsContainer, Wrapper } from './styles';
import type { HeaderProps, Icons } from './types';

function Header({ title, icons }: HeaderProps): JSX.Element {
  const { theme } = useAppSelector(state => state.themeReducer);
  return (
    <Wrapper theme={theme}>
      <Info theme={theme}>{title}</Info>
      <ManageSettingsContainer>
        {icons.map(({ Icon, id, onPress }: Icons) => {
          const DEFAULT_IMAGE = Image.resolveAssetSource(Icon).uri;

          return (
            <Pressable onPress={onPress}>
              <ManageIcon source={{ uri: DEFAULT_IMAGE }} />
            </Pressable>
          );
        })}
      </ManageSettingsContainer>
    </Wrapper>
  );
}

export default Header;
