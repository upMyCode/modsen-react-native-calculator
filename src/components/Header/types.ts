import { ImageSourcePropType } from 'react-native';

interface Icons {
  Icon: ImageSourcePropType;
  onPress: () => void;
  id: string;
}
interface HeaderProps {
  title: string;
  icons: Icons[];
}

interface Props {
  theme: string;
}

export type { HeaderProps, Icons, Props };
