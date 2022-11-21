import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Box, TextField, Button } from '@mui/material';
import authSelectors from 'redux/auth/auth-selectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      authOperations.register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    // e.target.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '500px',
        margin: '0 auto',
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-name-input"
        label="Username"
        name="name"
        type="text"
        autoComplete="current-name"
        variant="filled"
        color="secondary"
        error={!!error?.name}
        helperText={error?.name}
      />
      <TextField
        id="filled-email-input"
        label="Email"
        name="email"
        type="email"
        autoComplete="current-email"
        variant="filled"
        color="secondary"
        error={!!error?.email}
        helperText={error?.email}
      />
      <TextField
        id="filled-password-input"
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        color="secondary"
        error={!!error?.password}
        helperText={error?.password}
      />
      <Button
        sx={{ mt: '20px' }}
        color="secondary"
        type="submit"
        variant="outlined"
      >
        Завітати
      </Button>
    </Box>
  );
};
