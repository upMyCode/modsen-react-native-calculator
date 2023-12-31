import React from 'react';
import { FlatList, Image, ListRenderItemInfo, Pressable } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

import { Info, ManageIcon, ManageSettingsContainer, Wrapper } from './styles';
import type { HeaderProps, Icons } from './types';

function Header({ title, icons }: HeaderProps): JSX.Element {
  const { theme } = useAppSelector((state) => {
    return state.themeReducer;
  });

  const handleRenderIcons = ({ item }: ListRenderItemInfo<Icons>) => {
    const DEFAULT_IMAGE = Image.resolveAssetSource(item.Icon).uri;

    return (
      <Pressable onPress={item.onPress}>
        <ManageIcon source={{ uri: DEFAULT_IMAGE }} />
      </Pressable>
    );
  };
  return (
    <Wrapper theme={theme}>
      <Info theme={theme}>{title}</Info>
      <ManageSettingsContainer>
        <FlatList
          horizontal
          data={icons}
          keyExtractor={({ id }) => {
            return id;
          }}
          renderItem={handleRenderIcons}
        />
      </ManageSettingsContainer>
    </Wrapper>
  );
}

export default Header;
