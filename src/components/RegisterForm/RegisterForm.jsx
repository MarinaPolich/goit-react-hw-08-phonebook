import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      authOperations.register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" minLength="7" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
