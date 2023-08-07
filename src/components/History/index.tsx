import React from 'react';
import { FlatList, Image } from 'react-native';
import { RemoveBlack, RemoveLight } from 'src/assets';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import { removeOperation } from '../../reducers/operationListReducer';
import { Item, ItemButton, Items, ItemText, Wrapper } from './styles';

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
      <Items>
        <FlatList
          data={operationList}
          keyExtractor={({ id }) => {
            return id;
          }}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <Item>
                <ItemText theme={theme}>{item.context}</ItemText>
                <ItemButton
                  onPress={() => {
                    return dispatch(removeOperation(item.id));
                  }}
                >
                  <Image
                    width={24}
                    height={24}
                    source={theme === 'light' ? RemoveLight : RemoveBlack}
                  />
                </ItemButton>
              </Item>
            );
          }}
        />
      </Items>
    </Wrapper>
  );
}

export default History;
