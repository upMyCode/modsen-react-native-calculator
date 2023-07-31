import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Calculator } from 'root';
import { useAppSelector } from 'src/store/hooks';

import { RootStackParams } from '../../../App';
import { SettingsBlack, SettingsLight } from '../../assets';
import DefaultScreen from '../DefaultScreen';
import Wrapper from './styles';
import type Icons from './types';

function HomeScreen(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { theme } = useAppSelector(state => {
    return state.themeReducer;
  });
  const handleNavigate = () => {
    navigation.navigate('History');
  };
  const historyIconPackLight: Icons[] = [
    {
      Icon: SettingsBlack,
      onPress: handleNavigate,
      id: '6ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
  ];
  const historyIconPackDark: Icons[] = [
    {
      Icon: SettingsLight,
      onPress: handleNavigate,
      id: '7ac68afc-c605-48d3-a4f8-fbd91aa97f63',
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
      <DefaultScreen title="Modsen Calculator" icons={themePack}>
        <Calculator />
      </DefaultScreen>
    </Wrapper>
  );
}

export default HomeScreen;
