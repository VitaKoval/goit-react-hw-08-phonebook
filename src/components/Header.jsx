import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { selectIsLoggedIn } from '../redux/selectors';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: '700',
              letterSpacing: '.3rem',
            }}
          >
            PHONE book
          </Typography>
          {isLoggedIn ? <UserMenu /> : <Navigation />}
        </Toolbar>
      </AppBar>
    </>
  );
}
