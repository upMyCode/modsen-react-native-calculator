import { DISPLAYED_KEY_CUPS, UN_DISPLAYED_KEY_CUPS } from 'constants/keyCups';
import React, { useState } from 'react';
import { Dimensions, LayoutChangeEvent } from 'react-native';
import { Display, Keypad } from 'root';
import { useAppDispatch } from 'src/store/hooks';

import mathExecuter from '../../helper/mathExecuter';
import { addOperation } from '../../reducers/operationListReducer';
import Wrapper from './styles';
import type bracketsState from './types';

function Calculator(): JSX.Element {
  const [mathExpression, setMathExpression] = useState<string>('');
  const [isExpressionOutOfBounds, setExpressionBoundsStatus] =
    useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const dispatch = useAppDispatch();
  const [bracketsCounter, setBracketsCounter] = useState<bracketsState>({
    open: 0,
    close: 0,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const windowWidth = Dimensions.get('window').width;
    const SAFE_PIXEL_SPACING = 15;

    if (width + SAFE_PIXEL_SPACING > windowWidth) {
      setExpressionBoundsStatus(true);
    } else {
      setExpressionBoundsStatus(false);
    }
  };
  const handleSetMathExpression = (key: string) => {
    if (key) {
      if (DISPLAYED_KEY_CUPS.includes(key)) {
        const lastChar = mathExpression.slice(-1);

        if (!/[\d|(|)+|-]/.test(key) && !/[\d|(|)|+|-]/.test(lastChar)) return;
        if (lastChar === '+' && key === '+') return;
        if (lastChar === '-' && key === '-') return;
        if (/[+|-]/.test(lastChar) && /[*|/]/.test(key)) return;
        if (lastChar === '(' && /[*|/|%]/.test(key)) return;
        if (/[*|/|+|-]/.test(lastChar) && key === ')') return;
        if (key === ')' && bracketsCounter.close >= bracketsCounter.open) {
          return;
        }
        if (key === '(' && /[\d]/.test(lastChar)) return;
        if (key === ')' && lastChar === '(') return;
        if (key === '(') {
          setBracketsCounter((prev) => {
            return { ...prev, open: prev.open + 1 };
          });
        }
        if (key === ')') {
          setBracketsCounter((prev) => {
            return { ...prev, close: prev.close + 1 };
          });
        }

        if (isExpressionOutOfBounds) return;

        setMathExpression((prev) => {
          return prev + key;
        });
      }
      if (UN_DISPLAYED_KEY_CUPS) {
        const lastChar = mathExpression.slice(-1);

        if (key === '⌫' && mathExpression) {
          if (lastChar === '(') {
            setBracketsCounter((prev) => {
              return { ...prev, open: prev.open - 1 };
            });
          }
          if (lastChar === ')') {
            setBracketsCounter((prev) => {
              return { ...prev, close: prev.close - 1 };
            });
          }
          setMathExpression((prev) => {
            return prev.slice(0, -1);
          });
        }
        if (key === 'Ac' && mathExpression) {
          setBracketsCounter({ open: 0, close: 0 });
          setMathExpression('');
          setResult('');
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
            setMathExpression((prev) => {
              return prev.replace(match[match.length - 1], lastStr);
            });
          }
        }

        if (key === '=') {
          const mathExecuterResult = mathExecuter();
          const mathResult = mathExecuterResult(mathExpression);

          if (mathResult) {
            setResult(mathResult);
            dispatch(addOperation(`${mathExpression} = ${mathResult}`));
          }
        }
      }
    }
  };
  return (
    <Wrapper>
      <Display
        handleLayout={handleLayout}
        expression={mathExpression}
        result={result}
      />
      <Keypad handleSetMathExpression={handleSetMathExpression} />
    </Wrapper>
  );
}

export default Calculator;
