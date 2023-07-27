import MIcon from 'react-native-vector-icons/MaterialIcons';

MIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

function MaterialIcon({ size, name, color }: IconProps) {
  return <MIcon name={name} size={IconSizes[size]} color={color} />;
}
export default MaterialIcon;
