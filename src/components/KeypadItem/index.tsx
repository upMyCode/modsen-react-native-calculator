import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native';
import { Button } from 'root';

import type { KEYCUP } from '../../types/keyCups';
import {
  KeyCupListItem,
  KeyCupListItemNumbers,
  KeyCupListItemRightSideFirstGroup,
  KeyCupListItemRightSideSecondGroup,
} from './styles';
import type KeypadItemProps from './types';

function KeypadItem({
  data,
  numCol,
  handleSetMathExpression,
  bgColor,
  textColor,
  radius,
  width,
  height,
  size,
  type,
}: KeypadItemProps): JSX.Element {
  const handleRenderItem = ({ item }: ListRenderItemInfo<KEYCUP>) => {
    const Wrapper =
      type === 'NUM'
        ? KeyCupListItemNumbers
        : type === 'FIRSTGROUP'
        ? KeyCupListItemRightSideFirstGroup
        : type === 'SECONDTGROUP'
        ? KeyCupListItemRightSideSecondGroup
        : KeyCupListItem;

    return (
      <Wrapper>
        <Button
          title={item.title}
          onPress={() => handleSetMathExpression(item.title)}
          bgColor={bgColor}
          textColor={textColor}
          radius={radius}
          width={width}
          height={height}
          size={size}
        />
      </Wrapper>
    );
  };
  return (
    <FlatList
      data={data}
      numColumns={numCol}
      keyExtractor={({ id }) => id}
      renderItem={handleRenderItem}
    />
  );
}

export default KeypadItem;
