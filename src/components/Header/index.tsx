import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';
import { useAppSelector } from 'src/store/hooks';

import { Info, ManageIcon, ManageSettingsContainer, Wrapper } from './styles';

interface Icons {
  Icon: ImageSourcePropType;
  onPress: () => void;
  id: string;
}
interface HeaderProps {
  title: string;
  icons: Icons[];
}

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
