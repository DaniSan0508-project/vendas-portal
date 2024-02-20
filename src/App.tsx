import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loginRoutes } from './modules/login/routes';
import { useNotification } from './share/hooks/useNotification';

const App = () => {
  const { contextHolder } = useNotification();
  const router = createBrowserRouter([
    ...loginRoutes,
    {
      path: '/',
      element: <div>Tela principal</div>,
      errorElement: <div>Pagina não encontrada</div>,
    },
  ]);
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
};

export { App };
