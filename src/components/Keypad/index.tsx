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
import { FlatList, View } from 'react-native';
import { Button } from 'root';

import {
  KeyCupContainer,
  KeyCupContainerBottom,
  KeyCupContainerNumbers,
  KeyCupContainerTop,
  KeyCupListItem,
  KeyCupListItemNumbers,
  KeyCupListItemRightSideFirstGroup,
  KeyCupListItemRightSideSecondGroup,
  Wrapper,
} from './styles';

interface KeypadProps {
  handleSetMathExpression: (key: string) => void;
}

function Keypad({ handleSetMathExpression }: KeypadProps): JSX.Element {
  return (
    <Wrapper>
      <KeyCupContainerTop>
        <FlatList
          data={KEY_CUPS_BLOCK_1}
          numColumns={4}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <KeyCupListItem>
              <Button
                title={item.title}
                onPress={() => handleSetMathExpression(item.title)}
                bgColor="#FFFFFF"
                textColor="#109DFF"
                radius="24"
                width="62"
                height="40"
                size="18"
              />
            </KeyCupListItem>
          )}
        />
      </KeyCupContainerTop>
      <KeyCupContainer>
        <View>
          <KeyCupContainer>
            <FlatList
              data={KEY_CUPS_BLOCK_2}
              numColumns={1}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <KeyCupListItem>
                  <Button
                    title={item.title}
                    onPress={() => handleSetMathExpression(item.title)}
                    bgColor="#FFFFFF"
                    textColor="#858585"
                    radius="16"
                    width="62"
                    height="62"
                    size="32"
                  />
                </KeyCupListItem>
              )}
            />
            <FlatList
              data={KEY_CUPS_BLOCK_3}
              numColumns={1}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <KeyCupListItem>
                  <Button
                    title={item.title}
                    onPress={() => handleSetMathExpression(item.title)}
                    bgColor="#FFFFFF"
                    textColor="#858585"
                    radius="16"
                    width="62"
                    height="62"
                    size="22"
                  />
                </KeyCupListItem>
              )}
            />
            <FlatList
              data={KEY_CUPS_BLOCK_4}
              numColumns={1}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <KeyCupListItem>
                  <Button
                    title={item.title}
                    onPress={() => handleSetMathExpression(item.title)}
                    bgColor="#ADE2FF"
                    textColor="#109DFF"
                    radius="16"
                    width="62"
                    height="62"
                    size="32"
                  />
                </KeyCupListItem>
              )}
            />
          </KeyCupContainer>
          <KeyCupContainerNumbers>
            <FlatList
              data={KEY_CUPS_BLOCK_5}
              numColumns={3}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <KeyCupListItemNumbers>
                  <Button
                    title={item.title}
                    onPress={() => handleSetMathExpression(item.title)}
                    bgColor="#FFFFFF"
                    textColor="#38B9FF"
                    radius="16"
                    width="62"
                    height="62"
                    size="32"
                  />
                </KeyCupListItemNumbers>
              )}
            />
          </KeyCupContainerNumbers>
          <KeyCupContainerBottom>
            <View>
              <FlatList
                data={KEY_CUPS_BLOCK_9}
                numColumns={1}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                  <KeyCupListItem>
                    <Button
                      title={item.title}
                      onPress={() => handleSetMathExpression(item.title)}
                      bgColor="#FFFFFF"
                      textColor="#109DFF"
                      radius="16"
                      width="144"
                      height="60"
                      size="32"
                    />
                  </KeyCupListItem>
                )}
              />
            </View>
            <View>
              <FlatList
                data={KEY_CUPS_BLOCK_10}
                numColumns={1}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                  <KeyCupListItem>
                    <Button
                      title={item.title}
                      onPress={() => handleSetMathExpression(item.title)}
                      bgColor="#FFFFFF"
                      textColor="#38B9FF"
                      radius="16"
                      width="62"
                      height="62"
                      size="32"
                    />
                  </KeyCupListItem>
                )}
              />
            </View>
          </KeyCupContainerBottom>
        </View>
        <View>
          <View>
            <FlatList
              data={KEY_CUPS_BLOCK_6}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <KeyCupListItemRightSideFirstGroup>
                  <Button
                    title={item.title}
                    onPress={() => handleSetMathExpression(item.title)}
                    bgColor="#ADE2FF"
                    textColor="#109DFF"
                    radius="16"
                    width="62"
                    height="64"
                    size="32"
                  />
                </KeyCupListItemRightSideFirstGroup>
              )}
            />
          </View>
          <View>
            <FlatList
              data={KEY_CUPS_BLOCK_7}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <KeyCupListItemRightSideSecondGroup>
                  <Button
                    title={item.title}
                    onPress={() => handleSetMathExpression(item.title)}
                    bgColor="#ADE2FF"
                    textColor="#109DFF"
                    radius="16"
                    width="62"
                    height="96"
                    size="32"
                  />
                </KeyCupListItemRightSideSecondGroup>
              )}
            />
            <FlatList
              data={KEY_CUPS_BLOCK_8}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <KeyCupListItemRightSideSecondGroup>
                  <Button
                    title={item.title}
                    onPress={() => handleSetMathExpression(item.title)}
                    bgColor="#1991FF"
                    textColor="#B2DAFF"
                    radius="16"
                    width="62"
                    height="96"
                    size="32"
                  />
                </KeyCupListItemRightSideSecondGroup>
              )}
            />
          </View>
        </View>
      </KeyCupContainer>
    </Wrapper>
  );
}

export default Keypad;
