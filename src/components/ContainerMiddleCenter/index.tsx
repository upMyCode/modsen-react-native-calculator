import { KEY_CUPS_BLOCK_5 } from 'constants/keyCups';
import React from 'react';
import { KeypadItem } from 'root';
import {
  bgColorDarkThemeKeyCupsBlock5,
  bgColorLightThemeKeyCupsBlock5,
  textColorDarkThemeKeyCupsBlock5,
  textColorLightThemeKeyCupsBlock5,
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
        data={KEY_CUPS_BLOCK_5}
        numCol={3}
        handleSetMathExpression={handleSetMathExpression}
        bgColor={
          theme === 'light'
            ? bgColorLightThemeKeyCupsBlock5
            : bgColorDarkThemeKeyCupsBlock5
        }
        textColor={
          theme === 'light'
            ? textColorLightThemeKeyCupsBlock5
            : textColorDarkThemeKeyCupsBlock5
        }
        radius="16"
        width="62"
        height="62"
        size="32"
        type="NUM"
      />
    </Wrapper>
  );
}

export default ContainerMiddleTop;
