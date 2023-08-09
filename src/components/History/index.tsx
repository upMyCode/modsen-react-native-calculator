import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { RemoveBlack, RemoveLight } from 'src/assets';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import { removeOperation } from '../../reducers/operationListReducer';
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
                <ItemText theme={theme}>
                  {`${item.mathExpression} = ${item.mathResult}`}
                </ItemText>
                <ItemButton
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
