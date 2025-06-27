import { userStore } from '@/store/UserStore';
import { Navigate } from 'react-router-dom';

interface PrivaterouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivaterouteProps> = ({ children }) => {
  if (userStore.token) {
    return children;
  } else {
    return <Navigate to='/login' replace />;
  }
};
