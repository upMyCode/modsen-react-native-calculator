import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { removeOperation } from 'reducers/operationListReducer';
import { RemoveBlack, RemoveLight } from 'src/assets';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import { Item, ItemButton, ItemText, Wrapper } from './styles';

function History(): JSX.Element {
  const dispatch = useAppDispatch();
  const { operationList } = useAppSelector((state) => {
    return state.operationListReducer;
  });
  const { theme } = useAppSelector((state) => {
    return state.themeReducer;
  });

  return (
    <Wrapper>
      <View>
        <FlatList
          data={operationList}
          keyExtractor={({ id }) => {
            return id;
          }}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <Item>
                <ItemText
                  theme={theme}
                  testID={`TestHistoryItemContent-${item.id}`}
                >
                  {`${item.mathExpression} = ${item.mathResult}`}
                </ItemText>
                <ItemButton
                  testID={`TestHistoryItemButton-${item.id}`}
                  onPress={() => {
                    return dispatch(removeOperation(item.id));
                  }}
                >
                  <Image
                    width={7}
                    height={7}
                    source={theme === 'light' ? RemoveLight : RemoveBlack}
                  />
                </ItemButton>
              </Item>
            );
          }}
        />
      </View>
    </Wrapper>
  );
}

export default History;
