import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
]);

export const App = () => <RouterProvider router={router} />;
