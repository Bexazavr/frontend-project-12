import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/hooks.js';
import getPath from '../routes.js';

const CheckTokenPage = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.token ? (
    children
  ) : (
    <Navigate to={getPath.loginPage} state={{ from: location }} />
  );
};

export default CheckTokenPage;
