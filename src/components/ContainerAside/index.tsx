import {
  KEY_CUPS_BLOCK_6,
  KEY_CUPS_BLOCK_7,
  KEY_CUPS_BLOCK_8,
} from 'constants/keyCups';
import React from 'react';
import { View } from 'react-native';
import { KeypadItem } from 'root';
import {
  bgColorDarkThemeKeyCupsBlock6,
  bgColorDarkThemeKeyCupsBlock7,
  bgColorDarkThemeKeyCupsBlock8,
  bgColorLightThemeKeyCupsBlock6,
  bgColorLightThemeKeyCupsBlock7,
  bgColorLightThemeKeyCupsBlock8,
  textColorDarkThemeKeyCupsBlock6,
  textColorDarkThemeKeyCupsBlock7,
  textColorDarkThemeKeyCupsBlock8,
  textColorLightThemeKeyCupsBlock6,
  textColorLightThemeKeyCupsBlock7,
  textColorLightThemeKeyCupsBlock8,
} from 'theme/buttonTheme';

import type KeypadContainerTopProps from './types';

function ContainerAside({
  theme,
  handleSetMathExpression,
}: KeypadContainerTopProps) {
  return (
    <View>
      <View>
        <KeypadItem
          data={KEY_CUPS_BLOCK_6}
          handleSetMathExpression={handleSetMathExpression}
          bgColor={
            theme === 'light'
              ? bgColorLightThemeKeyCupsBlock6
              : bgColorDarkThemeKeyCupsBlock6
          }
          textColor={
            theme === 'light'
              ? textColorLightThemeKeyCupsBlock6
              : textColorDarkThemeKeyCupsBlock6
          }
          radius="16"
          width="62"
          height="64"
          size="32"
          type="FIRSTGROUP"
        />
      </View>
      <View>
        <KeypadItem
          data={KEY_CUPS_BLOCK_7}
          handleSetMathExpression={handleSetMathExpression}
          bgColor={
            theme === 'light'
              ? bgColorLightThemeKeyCupsBlock7
              : bgColorDarkThemeKeyCupsBlock7
          }
          textColor={
            theme === 'light'
              ? textColorLightThemeKeyCupsBlock7
              : textColorDarkThemeKeyCupsBlock7
          }
          radius="16"
          width="62"
          height="96"
          size="32"
          type="SECONDGROUP"
        />
        <KeypadItem
          data={KEY_CUPS_BLOCK_8}
          handleSetMathExpression={handleSetMathExpression}
          bgColor={
            theme === 'light'
              ? bgColorLightThemeKeyCupsBlock8
              : bgColorDarkThemeKeyCupsBlock8
          }
          textColor={
            theme === 'light'
              ? textColorLightThemeKeyCupsBlock8
              : textColorDarkThemeKeyCupsBlock8
          }
          radius="16"
          width="62"
          height="96"
          size="32"
          type="SECONDGROUP"
        />
      </View>
    </View>
  );
}

export default ContainerAside;
