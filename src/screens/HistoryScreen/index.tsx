import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { History } from 'src/index';
import { themeSlice } from 'src/reducers/themeReducer';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import { BinBlack, BinLight, MoonBlack, MoonLight } from '../../assets';
import DefaultScreen from '../DefaultScreen';
import Wrapper from './styles';
import type Icons from './types';

function HistoryScreen(): JSX.Element {
  const { theme } = useAppSelector(state => {
    return state.themeReducer;
  });
  const { changeTheme } = themeSlice.actions;
  const dispatch = useAppDispatch();

  const handleThemeChange = () => {
    if (theme === 'light') {
      dispatch(changeTheme('dark'));
    } else {
      dispatch(changeTheme('light'));
    }
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

  const [themePack, setThemePack] = useState<Icons[]>(() => {
    return historyIconPackLight;
  });

  useEffect(() => {
    if (theme === 'light') {
      setThemePack(historyIconPackLight);
    } else {
      setThemePack(historyIconPackDark);
    }
  }, [theme]);
  return (
    <Wrapper>
      <DefaultScreen title="History" icons={themePack}>
        <History />
      </DefaultScreen>
    </Wrapper>
  );
}

export default HistoryScreen;
