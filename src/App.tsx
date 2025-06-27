import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import MainPage from './pages/main';
import { PrivateRoute } from './components/ui/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    )
  }
]);

export const App = () => <RouterProvider router={router} />;
