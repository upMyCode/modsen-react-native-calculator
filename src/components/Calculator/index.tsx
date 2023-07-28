import { DISPLAYED_KEY_CUPS, UN_DISPLAYED_KEY_CUPS } from 'constants/keyCups';
import React, { useState } from 'react';
import { Display, Keypad } from 'root';

import Wrapper from './styles';

function Calculator(): JSX.Element {
  const [mathExpression, setMathExpression] = useState<string>('');

  const handleSetMathExpression = (key: string) => {
    if (key) {
      if (DISPLAYED_KEY_CUPS.includes(key)) {
        setMathExpression(prev => prev + key);
      }
      if (UN_DISPLAYED_KEY_CUPS) {
        if (key === '⌫' && mathExpression) {
          setMathExpression(prev => prev.slice(0, -1));
        }
        if (key === 'Ac' && mathExpression) {
          setMathExpression('');
        }
        if (key === '±') {
          const re = /(-\d+)|(\+\d+)|(\d+)/g;
          const match = mathExpression.match(re);

          if (match) {
            let lastStr = match[match.length - 1];
            const firstSymb = lastStr[0];

            if (firstSymb === '+' || /\d/.test(firstSymb)) {
              if (firstSymb === '+') {
                lastStr = lastStr.replace(/\+/, '-');
              } else {
                const lastStrArr = lastStr.split('');
                lastStrArr.unshift('-');
                lastStr = lastStrArr.join('');
              }
            } else {
              lastStr = lastStr.replace(/-/, '+');
            }
            setMathExpression(prev => {
              return prev.replace(match[match.length - 1], lastStr);
            });
          }
        }
      }
    }
  };
  return (
    <Wrapper>
      <Display expression={mathExpression} />
      <Keypad handleSetMathExpression={handleSetMathExpression} />
    </Wrapper>
  );
}

export default Calculator;
