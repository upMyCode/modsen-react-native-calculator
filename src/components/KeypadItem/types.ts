import type { KeyCups } from '../../types/keyCups';

interface KeypadItemProps {
  data: KeyCups;
  numCol?: number;
  handleSetMathExpression: (key: string) => void;
  type: string;
  bgColor: string;
  textColor: string;
  radius: string;
  width: string;
  height: string;
  size: string;
}

export default KeypadItemProps;
