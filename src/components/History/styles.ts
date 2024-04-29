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
  font-family: Poppins-Medium;
  font-size: 22px;
  line-height: 48px;
  color: ${({ theme }) => {
    return theme === 'light'
      ? historyItemTextLightTheme
      : historyItemTextDarkTheme;
  }};
`;

const Item = styled.View`
  display: flex;
  width: 320px;
  margin-left: 33px;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 14px;
`;

export { Item, ItemButton, ItemText, Wrapper };
