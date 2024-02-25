import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loginRoutes } from './modules/login/routes';
import { useNotification } from './share/hooks/useNotification';
import { firstScreenRoutes } from './modules/firstScreen/routes';
import { productScreenRoutes } from './modules/products/routes';

const App = () => {
  const { contextHolder } = useNotification();
  const router = createBrowserRouter([
    ...loginRoutes,
    ...firstScreenRoutes,
    ...productScreenRoutes,
  ]);
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
};

export { App };
