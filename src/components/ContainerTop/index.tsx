import { KEY_CUPS_BLOCK_1 } from 'constants/keyCups';
import React, { useContext } from 'react';
import { KeypadItem } from 'root';

import Theme from '../../context/ThemeContext';
import Wrapper from './styles';
import type KeypadContainerTopProps from './types';

function ContainerTop({ handleSetMathExpression }: KeypadContainerTopProps) {
  const { bgColorKeyCupsBlock1, textColorKeyCupsBlock1 } = useContext(Theme);
  return (
    <Wrapper>
      <KeypadItem
        data={KEY_CUPS_BLOCK_1}
        numCol={4}
        type="BASE"
        handleSetMathExpression={handleSetMathExpression}
        bgColor={bgColorKeyCupsBlock1}
        textColor={textColorKeyCupsBlock1}
        radius="24"
        width="62"
        height="40"
        size="18"
      />
    </Wrapper>
  );
}

export default ContainerTop;
