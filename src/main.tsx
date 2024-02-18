import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loginRoutes } from './modules/login/routes';

const router = createBrowserRouter([
  ...loginRoutes,
  {
    path: '/',
    element: <div>Tela principal</div>,
    errorElement: <div>Pagina não encontrada</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
