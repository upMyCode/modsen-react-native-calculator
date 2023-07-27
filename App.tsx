import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HistoryScreen from 'screens/HistoryScreen';
import HomeScreen from 'screens/HomeScreen';

export type RootStackParams = {
  Home: undefined;
  History: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
