import { Input as InputAntd, InputProps } from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface IInputProps extends InputProps {
  title?: string;
  margin?: string;
}

const Input = ({ title, margin, ...props }: IInputProps) => {
  return (
    <BoxInput margin={margin}>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export { Input };
