import { Input as InputAntd, InputProps } from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface IInputProps extends InputProps {
  title?: string;
}

const Input = ({ title, ...props }: IInputProps) => {
  return (
    <BoxInput>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export { Input };
