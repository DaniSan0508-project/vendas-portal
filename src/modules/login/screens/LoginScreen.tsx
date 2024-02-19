import { useState } from 'react';
import { Button } from '../../../share/components/buttons/button/Button';
import { Input } from '../../../share/components/inputs/input/Input';
import { useRequests } from '../../../share/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';
import { useGlobalContext } from '../../../share/hooks/userGlobalContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, postRequest } = useRequests();
  const { accessToken, setAccessToken } = useGlobalContext();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    postRequest('http://localhost:8080/auth', { email, password });
    setAccessToken('sdxasdaskasxmasKKsiakssaxam');
  };

  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            Login ({accessToken})
          </TitleLogin>
          <Input
            title="USUÁRIO"
            margin="32px 0px 0px"
            onChange={handleEmail}
            value={email}
          />
          <Input
            title="SENHA"
            margin="32px 0px 0px"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          <Button
            type="primary"
            loading={loading}
            margin="64px 0px 16px 0px"
            onClick={handleLogin}
          >
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export { LoginScreen };
