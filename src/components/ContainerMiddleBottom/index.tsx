import { KEY_CUPS_BLOCK_9, KEY_CUPS_BLOCK_10 } from 'constants/keyCups';
import React from 'react';
import { View } from 'react-native';
import { KeypadItem } from 'root';
import {
  bgColorDarkThemeKeyCupsBlock9,
  bgColorDarkThemeKeyCupsBlock10,
  bgColorLightThemeKeyCupsBlock9,
  bgColorLightThemeKeyCupsBlock10,
  textColorDarkThemeKeyCupsBlock9,
  textColorDarkThemeKeyCupsBlock10,
  textColorLightThemeKeyCupsBlock9,
  textColorLightThemeKeyCupsBlock10,
} from 'theme/buttonTheme';

import Wrapper from './styles';
import type KeypadContainerTopProps from './types';

function ContainerMiddleBottom({
  theme,
  handleSetMathExpression,
}: KeypadContainerTopProps) {
  return (
    <Wrapper>
      <View>
        <KeypadItem
          data={KEY_CUPS_BLOCK_9}
          numCol={1}
          handleSetMathExpression={handleSetMathExpression}
          bgColor={
            theme === 'light'
              ? bgColorLightThemeKeyCupsBlock9
              : bgColorDarkThemeKeyCupsBlock9
          }
          textColor={
            theme === 'light'
              ? textColorLightThemeKeyCupsBlock9
              : textColorDarkThemeKeyCupsBlock9
          }
          radius="16"
          width="144"
          height="60"
          size="32"
          type="BASE"
        />
      </View>
      <View>
        <KeypadItem
          data={KEY_CUPS_BLOCK_10}
          numCol={1}
          handleSetMathExpression={handleSetMathExpression}
          bgColor={
            theme === 'light'
              ? bgColorLightThemeKeyCupsBlock10
              : bgColorDarkThemeKeyCupsBlock10
          }
          textColor={
            theme === 'light'
              ? textColorLightThemeKeyCupsBlock10
              : textColorDarkThemeKeyCupsBlock10
          }
          radius="16"
          width="62"
          height="62"
          size="32"
          type="BASE"
        />
      </View>
    </Wrapper>
  );
}

export default ContainerMiddleBottom;
