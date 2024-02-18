import { LoginScreen } from '.';

interface ILoginProps {
  path: string;
  element: JSX.Element;
}

export const loginRoutes: ILoginProps[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];
