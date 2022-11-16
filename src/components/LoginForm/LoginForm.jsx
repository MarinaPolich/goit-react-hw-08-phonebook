import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(
      authOperations.logIn({
        email: email.value,
        password: password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" minLength="7" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
