import { Input } from '../../../share/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export { LoginScreen };
