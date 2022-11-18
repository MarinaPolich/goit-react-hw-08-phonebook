import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(
      authOperations.logIn({
        email: email.value,
        password: password.value,
      })
    );
    e.currentTarget.reset();
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
        id="filled-email-input"
        label="Email"
        name="email"
        type="email"
        autoComplete="current-email"
        variant="filled"
        color="warning"
        size="normal"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        variant="filled"
      />
      <Button type="submit" variant="outlined">
        Log In
      </Button>
    </Box>
  );
};
