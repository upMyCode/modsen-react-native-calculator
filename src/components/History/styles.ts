import styled from 'styled-components/native';
import {
  historyItemTextDarkTheme,
  historyItemTextLightTheme,
} from 'theme/buttonTheme';

import type ItemTextProps from './types';

const Wrapper = styled.View`
  width: 100%;
  min-height: 261px;
  padding-top: 69px;
`;

const ItemText = styled.Text<ItemTextProps>`
  font-style: 'Poppins-Medium';
  font-size: 32px;
  line-height: 48px;
  color: ${({ theme }) => {
    return theme === 'light'
      ? historyItemTextLightTheme
      : historyItemTextDarkTheme;
  }};
`;

const Item = styled.View`
  display: flex;
  flex-direction: row;
`;

const ItemButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 29px;
`;

const Items = styled.ScrollView.attrs(() => {
  return { contentContainerStyle: { alignItems: 'flex-end' } };
})``;
export { Item, ItemButton, Items, ItemText, Wrapper };
