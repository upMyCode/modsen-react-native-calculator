import { KEY_CUPS_BLOCK_1 } from 'constants/keyCups';
import React from 'react';
import { KeypadItem } from 'root';
import {
  bgColorDarkThemeKeyCupsBlock1,
  bgColorLightThemeKeyCupsBlock1,
  textColorDarkThemeKeyCupsBlock1,
  textColorLightThemeKeyCupsBlock1,
} from 'theme/buttonTheme';

import Wrapper from './styles';
import type KeypadContainerTopProps from './types';

function ContainerTop({
  theme,
  handleSetMathExpression,
}: KeypadContainerTopProps) {
  return (
    <Wrapper>
      <KeypadItem
        data={KEY_CUPS_BLOCK_1}
        numCol={4}
        type="BASE"
        handleSetMathExpression={handleSetMathExpression}
        bgColor={
          theme === 'light'
            ? bgColorLightThemeKeyCupsBlock1
            : bgColorDarkThemeKeyCupsBlock1
        }
        textColor={
          theme === 'light'
            ? textColorLightThemeKeyCupsBlock1
            : textColorDarkThemeKeyCupsBlock1
        }
        radius="24"
        width="62"
        height="40"
        size="18"
      />
    </Wrapper>
  );
}

export default ContainerTop;
