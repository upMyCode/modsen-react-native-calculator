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
  const { theme } = useAppSelector(state => state.themeReducer);
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
      id: '2',
    },
    {
      Icon: BinLight,
      onPress: () => Alert.alert('bin'),
      id: '3',
    },
  ];

  const historyIconPackLight: Icons[] = [
    {
      Icon: MoonBlack,
      onPress: handleThemeChange,
      id: '2',
    },
    {
      Icon: BinBlack,
      onPress: () => Alert.alert('bin'),
      id: '3',
    },
  ];

  const [themePack, setThemePack] = useState<Icons[]>(
    () => historyIconPackLight,
  );

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
