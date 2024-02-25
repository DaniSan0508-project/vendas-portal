import { FirstScreen } from '.';

interface ILoginProps {
  path: string;
  element: JSX.Element;
  errorElement: JSX.Element;
}

export const firstScreenRoutes: ILoginProps[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <div>Página não encontada</div>,
  },
];
