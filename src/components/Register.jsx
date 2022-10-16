// import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';
import { signUp } from '../redux/authOperation';

export function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    console.log(evt.target.value);
    switch (evt.target.name) {
      case 'name':
        return setName(evt.target.value);
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
    console.log(name, email, password);

    dispatch(signUp({ name, email, password }));

    setName('');
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
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />{' '}
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
        <br />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </>
  );
}
