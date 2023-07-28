import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Calculator } from 'src/index';
import { useAppSelector } from 'src/store/hooks';

import { RootStackParams } from '../../../App';
import { SettingsBlack, SettingsLight } from '../../assets';
import DefaultScreen from '../DefaultScreen';
import Wrapper from './styles';

interface Icons {
  Icon: ImageSourcePropType;
  onPress: () => void;
  id: string;
}

function HomeScreen(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { theme } = useAppSelector(state => state.themeReducer);
  const handleNavigate = () => {
    navigation.navigate('History');
  };
  const historyIconPackLight: Icons[] = [
    {
      Icon: SettingsBlack,
      onPress: handleNavigate,
      id: '1',
    },
  ];
  const historyIconPackDark: Icons[] = [
    {
      Icon: SettingsLight,
      onPress: handleNavigate,
      id: '10',
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
      <DefaultScreen title="Modsen Calculator" icons={themePack}>
        <Calculator />
      </DefaultScreen>
    </Wrapper>
  );
}

export default HomeScreen;
