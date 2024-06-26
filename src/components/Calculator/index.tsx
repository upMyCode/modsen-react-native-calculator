import { DISPLAYED_KEY_CUPS, UN_DISPLAYED_KEY_CUPS } from 'constants/keyCups';
import changePlusToMinusAndViceVersa from 'helpers/changePlusToMinusAndViceVersa';
import handleAlertsForUncorrectMathResult from 'helpers/handleAlertsForUncorrectMathResult';
import isPressedKeyInvalid from 'helpers/isPressedKeyInvalid';
import isResultEqualsExpression from 'helpers/isResultEqualsExpression';
import mathExecuter from 'helpers/mathExecuter';
import React, { useState } from 'react';
import { Alert, Dimensions, LayoutChangeEvent } from 'react-native';
import {
  changeMathExpression,
  removeMathExpression,
} from 'reducers/mathExpressionReducer';
import { changeMathResult, removeMathResult } from 'reducers/mathResultReducer';
import { addOperation } from 'reducers/operationListReducer';
import { Display, Keypad } from 'root';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import Wrapper from './styles';
import type BracketsState from './types';

function Calculator(): JSX.Element {
  const { mathExpression } = useAppSelector((state) => {
    return state.mathExpressionReducer;
  });
  const { mathResult } = useAppSelector((state) => {
    return state.mathResultReducer;
  });
  const [isExpressionOutOfBounds, setExpressionBoundsStatus] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [bracketsCounter, setBracketsCounter] = useState<BracketsState>({
    open: 0,
    close: 0,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const windowWidth = Dimensions.get('window').width;
    const SAFE_PIXEL_SPACING = 48;

    if (width + SAFE_PIXEL_SPACING > windowWidth) {
      Alert.alert('You have exceeded the allowed character limit');
      setExpressionBoundsStatus(true);
    } else {
      setExpressionBoundsStatus(false);
    }
  };
  const handleSetMathExpression = (key: string) => {
    if (key) {
      if (DISPLAYED_KEY_CUPS.includes(key)) {
        const lastChar = mathExpression.slice(-1);
        const keyInvalidStatus = isPressedKeyInvalid(
          key,
          lastChar,
          bracketsCounter
        );

        if (keyInvalidStatus) return;
        if (key === '(') {
          setBracketsCounter((prev) => {
            return {
              ...prev,
              open: prev.open + 1,
            };
          });
        }
        if (key === ')') {
          setBracketsCounter((prev) => {
            return {
              ...prev,
              close: prev.close + 1,
            };
          });
        }
        if (isExpressionOutOfBounds) return;

        dispatch(changeMathExpression(mathExpression + key));
      }
      if (UN_DISPLAYED_KEY_CUPS) {
        const lastChar = mathExpression.slice(-1);

        if (key === '⌫' && mathExpression) {
          if (lastChar === '(') {
            setBracketsCounter((prev) => {
              return {
                ...prev,
                open: prev.open - 1,
              };
            });
          }
          if (lastChar === ')') {
            setBracketsCounter((prev) => {
              return {
                ...prev,
                close: prev.close - 1,
              };
            });
          }
          dispatch(removeMathResult());
          dispatch(changeMathExpression(mathExpression.slice(0, -1)));
        }
        if (key === 'Ac' && mathExpression) {
          setBracketsCounter({
            open: 0,
            close: 0,
          });
          dispatch(removeMathExpression());
          dispatch(removeMathResult());
        }
        if (key === '±') {
          const { changedLastString, match } =
            changePlusToMinusAndViceVersa(mathExpression);
          const mathExpressionArray = mathExpression.match(
            /([+|-]?\d+(?:\.\d+))|([+|-]?\.\d+)|([+|-]?\d+)|[/|*|%]|([+|-]?[(|)])/g
          );

          if (match && mathExpressionArray) {
            const id = mathExpressionArray.lastIndexOf(match[match.length - 1]);

            if (id !== -1) {
              mathExpressionArray?.splice(id, 1, changedLastString);

              const mathExpressionConvertedToString =
                mathExpressionArray?.join('');

              if (mathExpressionConvertedToString) {
                dispatch(changeMathExpression(mathExpressionConvertedToString));
              }
            }
          }
        }
        if (key === '=') {
          const mathExecuterResult = mathExecuter();

          if (/(?<!.+)(\d+[%|/|*|+|-])(?!.+)/g.test(mathExpression)) {
            return;
          }

          const result = mathExecuterResult(mathExpression);

          if (result) {
            const isAlertAppeared = handleAlertsForUncorrectMathResult(
              dispatch,
              result
            );

            if (isAlertAppeared) return;
            if (isResultEqualsExpression(mathExpression, result)) return;

            dispatch(changeMathResult(result));
            dispatch(
              addOperation({
                mathExpression,
                mathResult: result,
              })
            );
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
        result={mathResult}
      />
      <Keypad handleSetMathExpression={handleSetMathExpression} />
    </Wrapper>
  );
}

export default Calculator;
