import { ButtonProps } from 'antd';
import { ButtonAntd } from './button.styles';

interface IButtonProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: IButtonProps) => {
  return <ButtonAntd margin={margin} {...props} />;
};

export { Button };
