import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';
import { logIn } from '../redux/authOperation';

export function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'email':
        return setEmail(evt.target.value);
      case 'password':
        return setPassword(evt.target.value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          pattern=".+@globex\.com"
          value={email}
          onChange={handleChange}
          required
        />{' '}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </>
  );
}
