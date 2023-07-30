interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor: string;
  textColor: string;
  height: string;
  width: string;
  radius: string;
  size: string;
}

interface CalculatorButtonProps {
  bgColor: string;
  width: string;
  height: string;
  radius: string;
}
interface TextContentProps {
  textColor: string;
  size: string;
}

export type { ButtonProps, CalculatorButtonProps, TextContentProps };
