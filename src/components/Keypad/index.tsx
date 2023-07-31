import {
  KEY_CUPS_BLOCK_1,
  KEY_CUPS_BLOCK_2,
  KEY_CUPS_BLOCK_3,
  KEY_CUPS_BLOCK_4,
  KEY_CUPS_BLOCK_5,
  KEY_CUPS_BLOCK_6,
  KEY_CUPS_BLOCK_7,
  KEY_CUPS_BLOCK_8,
  KEY_CUPS_BLOCK_9,
  KEY_CUPS_BLOCK_10,
} from 'constants/keyCups';
import React from 'react';
import { View } from 'react-native';
import { KeypadItem } from 'root';
import { useAppSelector } from 'src/store/hooks';

import {
  bgColorDarkThemeKeyCupsBlock1,
  bgColorDarkThemeKeyCupsBlock2,
  bgColorDarkThemeKeyCupsBlock3,
  bgColorDarkThemeKeyCupsBlock4,
  bgColorDarkThemeKeyCupsBlock5,
  bgColorDarkThemeKeyCupsBlock6,
  bgColorDarkThemeKeyCupsBlock7,
  bgColorDarkThemeKeyCupsBlock8,
  bgColorDarkThemeKeyCupsBlock9,
  bgColorDarkThemeKeyCupsBlock10,
  bgColorLightThemeKeyCupsBlock1,
  bgColorLightThemeKeyCupsBlock2,
  bgColorLightThemeKeyCupsBlock3,
  bgColorLightThemeKeyCupsBlock4,
  bgColorLightThemeKeyCupsBlock5,
  bgColorLightThemeKeyCupsBlock6,
  bgColorLightThemeKeyCupsBlock7,
  bgColorLightThemeKeyCupsBlock8,
  bgColorLightThemeKeyCupsBlock9,
  bgColorLightThemeKeyCupsBlock10,
  textColorDarkThemeKeyCupsBlock1,
  textColorDarkThemeKeyCupsBlock2,
  textColorDarkThemeKeyCupsBlock3,
  textColorDarkThemeKeyCupsBlock4,
  textColorDarkThemeKeyCupsBlock5,
  textColorDarkThemeKeyCupsBlock6,
  textColorDarkThemeKeyCupsBlock7,
  textColorDarkThemeKeyCupsBlock8,
  textColorDarkThemeKeyCupsBlock9,
  textColorDarkThemeKeyCupsBlock10,
  textColorLightThemeKeyCupsBlock1,
  textColorLightThemeKeyCupsBlock2,
  textColorLightThemeKeyCupsBlock3,
  textColorLightThemeKeyCupsBlock4,
  textColorLightThemeKeyCupsBlock5,
  textColorLightThemeKeyCupsBlock6,
  textColorLightThemeKeyCupsBlock7,
  textColorLightThemeKeyCupsBlock8,
  textColorLightThemeKeyCupsBlock9,
  textColorLightThemeKeyCupsBlock10,
} from '../../theme';
import {
  KeyCupContainer,
  KeyCupContainerBottom,
  KeyCupContainerNumbers,
  KeyCupContainerTop,
  Wrapper,
} from './styles';
import type KeypadProps from './types';

function Keypad({ handleSetMathExpression }: KeypadProps): JSX.Element {
  const { theme } = useAppSelector(state => {
    return state.themeReducer;
  });
  return (
    <Wrapper>
      <KeyCupContainerTop>
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
      </KeyCupContainerTop>
      <KeyCupContainer>
        <View>
          <KeyCupContainer>
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
          </KeyCupContainer>
          <KeyCupContainerNumbers>
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
          </KeyCupContainerNumbers>
          <KeyCupContainerBottom>
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
          </KeyCupContainerBottom>
        </View>
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
      </KeyCupContainer>
    </Wrapper>
  );
}

export default Keypad;
