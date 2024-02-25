import { LoginScreen } from '.';

interface ILoginProps {
  path: string;
  element: JSX.Element;
}

export enum LoginRoutesEnum {
  LOGIN = '/login',
}

export const loginRoutes: ILoginProps[] = [
  {
    path: LoginRoutesEnum.LOGIN,
    element: <LoginScreen />,
  },
];
