import { ReactElement, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

interface Icons {
  Icon: ImageSourcePropType;
  onPress: () => void;
  id: string;
}

interface DefaultScreenProps {
  children: ReactNode[] | ReactElement;
  icons: Icons[];
  title: string;
}

interface WrapperProps {
  theme: string;
}
export type { DefaultScreenProps, WrapperProps };
