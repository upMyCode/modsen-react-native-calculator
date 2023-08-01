import {
  KEY_CUPS_BLOCK_2,
  KEY_CUPS_BLOCK_3,
  KEY_CUPS_BLOCK_4,
} from 'constants/keyCups';
import React from 'react';
import { KeypadItem } from 'root';
import {
  bgColorDarkThemeKeyCupsBlock2,
  bgColorDarkThemeKeyCupsBlock3,
  bgColorDarkThemeKeyCupsBlock4,
  bgColorLightThemeKeyCupsBlock2,
  bgColorLightThemeKeyCupsBlock3,
  bgColorLightThemeKeyCupsBlock4,
  textColorDarkThemeKeyCupsBlock2,
  textColorDarkThemeKeyCupsBlock3,
  textColorDarkThemeKeyCupsBlock4,
  textColorLightThemeKeyCupsBlock2,
  textColorLightThemeKeyCupsBlock3,
  textColorLightThemeKeyCupsBlock4,
} from 'theme/buttonTheme';

import Wrapper from './styles';
import type KeypadContainerTopProps from './types';

function ContainerMiddleTop({
  theme,
  handleSetMathExpression,
}: KeypadContainerTopProps) {
  return (
    <Wrapper>
      <KeypadItem
        data={KEY_CUPS_BLOCK_2}
        numCol={1}
        handleSetMathExpression={handleSetMathExpression}
        bgColor={
          theme === 'light'
            ? bgColorLightThemeKeyCupsBlock2
            : bgColorDarkThemeKeyCupsBlock2
        }
        textColor={
          theme === 'light'
            ? textColorLightThemeKeyCupsBlock2
            : textColorDarkThemeKeyCupsBlock2
        }
        radius="16"
        width="62"
        height="62"
        size="32"
        type="BASE"
      />
      <KeypadItem
        data={KEY_CUPS_BLOCK_3}
        numCol={1}
        handleSetMathExpression={handleSetMathExpression}
        bgColor={
          theme === 'light'
            ? bgColorLightThemeKeyCupsBlock3
            : bgColorDarkThemeKeyCupsBlock3
        }
        textColor={
          theme === 'light'
            ? textColorLightThemeKeyCupsBlock3
            : textColorDarkThemeKeyCupsBlock3
        }
        radius="16"
        width="62"
        height="62"
        size="22"
        type="BASE"
      />
      <KeypadItem
        data={KEY_CUPS_BLOCK_4}
        numCol={1}
        handleSetMathExpression={handleSetMathExpression}
        bgColor={
          theme === 'light'
            ? bgColorLightThemeKeyCupsBlock4
            : bgColorDarkThemeKeyCupsBlock4
        }
        textColor={
          theme === 'light'
            ? textColorLightThemeKeyCupsBlock4
            : textColorDarkThemeKeyCupsBlock4
        }
        radius="16"
        width="62"
        height="62"
        size="32"
        type="BASE"
      />
    </Wrapper>
  );
}

export default ContainerMiddleTop;
