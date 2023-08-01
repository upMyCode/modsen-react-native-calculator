import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';
import { themeSlice } from 'src/reducers/themeReducer';
import { useAppDispatch } from 'src/store/hooks';

import { RootStackParams } from '../../App';
import {
  BinBlack,
  BinLight,
  MoonBlack,
  MoonLight,
  SettingsBlack,
  SettingsLight,
} from '../assets';
import type Icons from './types';

const { changeTheme } = themeSlice.actions;

const useIconsPack = (theme: string) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const handleThemeChange = () => {
    if (theme === 'light') {
      dispatch(changeTheme('dark'));
    } else {
      dispatch(changeTheme('light'));
    }
  };
  const handleNavigate = () => {
    navigation.navigate('History');
  };

  const historyIconPackDark: Icons[] = [
    {
      Icon: MoonLight,
      onPress: handleThemeChange,
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
      Icon: BinLight,
      onPress: () => {
        return Alert.alert('bin');
      },
      id: '4ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
  ];
  const historyIconPackLight: Icons[] = [
    {
      Icon: MoonBlack,
      onPress: handleThemeChange,
      id: '3',
    },
    {
      Icon: BinBlack,
      onPress: () => {
        return Alert.alert('bin');
      },
      id: '5ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
  ];
  const homeIconPackLight: Icons[] = [
    {
      Icon: SettingsBlack,
      onPress: handleNavigate,
      id: '6ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
  ];
  const homeIconPackDark: Icons[] = [
    {
      Icon: SettingsLight,
      onPress: handleNavigate,
      id: '7ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
  ];

  return {
    historyIconPackDark,
    historyIconPackLight,
    homeIconPackLight,
    homeIconPackDark,
  };
};

export default useIconsPack;
