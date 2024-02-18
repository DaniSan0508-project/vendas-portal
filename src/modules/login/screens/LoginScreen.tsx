import { Button } from '../../../share/buttons/button/Button';
import { Input } from '../../../share/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            Login
          </TitleLogin>
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
          <Button margin="64px 0px 16px 0px" type="primary">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export { LoginScreen };
