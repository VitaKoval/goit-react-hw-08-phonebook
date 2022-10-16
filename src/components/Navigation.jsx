import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export function Navigation() {
  return (
    <>
      <NavLink
        to="login"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          marginRight: 15,
          marginLeft: 28,
        }}
      >
        <Button color="inherit" variant="outlined" size="large">
          LOGIN
        </Button>
      </NavLink>
      <NavLink
        to="/register"
        style={{ textDecoration: 'none', color: 'inherit', marginRight: 15 }}
      >
        <Button color="inherit" variant="outlined" size="large">
          REGISTER
        </Button>
      </NavLink>
    </>
  );
}
