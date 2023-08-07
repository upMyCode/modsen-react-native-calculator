import {
  KEY_CUPS_BLOCK_6,
  KEY_CUPS_BLOCK_7,
  KEY_CUPS_BLOCK_8,
} from 'constants/keyCups';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { KeypadItem } from 'root';

import Theme from '../../context/ThemeContext';
import type KeypadContainerTopProps from './types';

function ContainerAside({ handleSetMathExpression }: KeypadContainerTopProps) {
  const {
    bgColorKeyCupsBlock6,
    textColorKeyCupsBlock6,
    bgColorKeyCupsBlock7,
    textColorKeyCupsBlock7,
    bgColorKeyCupsBlock8,
    textColorKeyCupsBlock8,
  } = useContext(Theme);
  return (
    <View>
      <View>
        <KeypadItem
          data={KEY_CUPS_BLOCK_6}
          handleSetMathExpression={handleSetMathExpression}
          bgColor={bgColorKeyCupsBlock6}
          textColor={textColorKeyCupsBlock6}
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
          bgColor={bgColorKeyCupsBlock7}
          textColor={textColorKeyCupsBlock7}
          radius="16"
          width="62"
          height="96"
          size="32"
          type="SECONDGROUP"
        />
        <KeypadItem
          data={KEY_CUPS_BLOCK_8}
          handleSetMathExpression={handleSetMathExpression}
          bgColor={bgColorKeyCupsBlock8}
          textColor={textColorKeyCupsBlock8}
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
