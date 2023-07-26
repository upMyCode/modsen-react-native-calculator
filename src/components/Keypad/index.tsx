import React from 'react';
import { Wrapper, KeyCupContainer, KeyCupListItem } from './styles';
import { Alert, View, FlatList } from 'react-native';
import { Button } from 'root';

import {
  KEY_CUPS_BLOCK_1,
  KEY_CUPS_BLOCK_2,
  KEY_CUPS_BLOCK_3,
  KEY_CUPS_BLOCK_4,
  KEY_CUPS_BLOCK_5,
  KEY_CUPS_BLOCK_6,
  KEY_CUPS_BLOCK_7,
} from 'constants/keyCups';

const Keypad = (): JSX.Element => {
  return (
    <Wrapper>
      <KeyCupContainer>
        <FlatList
          data={KEY_CUPS_BLOCK_1}
          numColumns={4}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <KeyCupListItem>
              <Button
                title={item.title}
                onPress={() => Alert.alert('Modal has been closed.')}
                bgColor="#FFFFFF"
                textColor="#109DFF"
                radius="24"
                width="62"
                height="40"
              />
            </KeyCupListItem>
          )}
        />
      </KeyCupContainer>
      <KeyCupContainer>
        <View>
          <KeyCupContainer>
            <FlatList
              data={KEY_CUPS_BLOCK_2}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <KeyCupListItem>
                  <Button
                    title={item.title}
                    onPress={() => Alert.alert('Modal has been closed.')}
                    bgColor="#FFFFFF"
                    textColor="#109DFF"
                    radius="16"
                    width="62"
                    height="62"
                  />
                </KeyCupListItem>
              )}
            />
          </KeyCupContainer>
          <KeyCupContainer>
            <FlatList
              data={KEY_CUPS_BLOCK_3}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <KeyCupListItem>
                  <Button
                    title={item.title}
                    onPress={() => Alert.alert('Modal has been closed.')}
                    bgColor="#FFFFFF"
                    textColor="#109DFF"
                    radius="16"
                    width="62"
                    height="62"
                  />
                </KeyCupListItem>
              )}
            />
          </KeyCupContainer>
          <KeyCupContainer>
            <View>
              <FlatList
                data={KEY_CUPS_BLOCK_6}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <KeyCupListItem>
                    <Button
                      title={item.title}
                      onPress={() => Alert.alert('Modal has been closed.')}
                      bgColor="#FFFFFF"
                      textColor="#109DFF"
                      radius="16"
                      width="144"
                      height="60"
                    />
                  </KeyCupListItem>
                )}
              />
            </View>
            <View>
              <FlatList
                data={KEY_CUPS_BLOCK_7}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <KeyCupListItem>
                    <Button
                      title={item.title}
                      onPress={() => Alert.alert('Modal has been closed.')}
                      bgColor="#FFFFFF"
                      textColor="#109DFF"
                      radius="16"
                      width="62"
                      height="62"
                    />
                  </KeyCupListItem>
                )}
              />
            </View>
          </KeyCupContainer>
        </View>
        <View>
          <View>
            <FlatList
              data={KEY_CUPS_BLOCK_4}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <KeyCupListItem>
                  <Button
                    title={item.title}
                    onPress={() => Alert.alert('Modal has been closed.')}
                    bgColor="#FFFFFF"
                    textColor="#109DFF"
                    radius="16"
                    width="62"
                    height="64"
                  />
                </KeyCupListItem>
              )}
            />
          </View>
          <View>
            <FlatList
              data={KEY_CUPS_BLOCK_5}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <KeyCupListItem>
                  <Button
                    title={item.title}
                    onPress={() => Alert.alert('Modal has been closed.')}
                    bgColor="#FFFFFF"
                    textColor="#109DFF"
                    radius="16"
                    width="62"
                    height="96"
                  />
                </KeyCupListItem>
              )}
            />
          </View>
        </View>
      </KeyCupContainer>
    </Wrapper>
  );
};

export default Keypad;
