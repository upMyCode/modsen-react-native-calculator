import { ImageSourcePropType } from 'react-native';

interface Icons {
  Icon: ImageSourcePropType;
  onPress: () => void;
  id: string;
}

export default Icons;
