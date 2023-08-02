import MIcon from 'react-native-vector-icons/MaterialIcons';

import { IconProps, IconSizes } from './types';

MIcon.loadFont();
function MaterialIcon({ size, name, color }: IconProps) {
  return <MIcon name={name} size={IconSizes[size]} color={color} />;
}
export default MaterialIcon;
