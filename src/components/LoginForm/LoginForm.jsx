import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import * as React from 'react';
import { Box, TextField, Button, FormHelperText } from '@mui/material';
import authSelectors from 'redux/auth/auth-selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(
      authOperations.logIn({
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
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
      error={error?.status}
    >
      <TextField
        id="filled-email-input"
        label="Email"
        name="email"
        type="email"
        autoComplete="current-email"
        variant="filled"
        color="secondary"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        color="secondary"
      />
      <div>
        <FormHelperText
          sx={{ m: 1, ml: '26px', width: '50ch' }}
          error={!!error}
        >
          {error?.status}
        </FormHelperText>
      </div>

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
