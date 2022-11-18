import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
