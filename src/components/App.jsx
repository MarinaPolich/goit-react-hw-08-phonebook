import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/register" component={<Contacts />} />
            }
          />
        </Route>
      )}
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};
