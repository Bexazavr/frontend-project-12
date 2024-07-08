import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../selectors/selectors.js';
import getPath from '../routes.js';

const CheckTokenPage = ({ children }) => {
  const auth = useSelector(getAuth);
  const location = useLocation();

  return auth.token ? (
    children
  ) : (
    <Navigate to={getPath.loginPage} state={{ from: location }} />
  );
};

export default CheckTokenPage;
