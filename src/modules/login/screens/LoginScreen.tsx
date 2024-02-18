import { useState } from 'react';
import { Button } from '../../../share/buttons/button/Button';
import { Input } from '../../../share/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => alert('Usuário ou senha invalido'));
  };

  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            Login
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
