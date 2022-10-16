import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AppBar, Toolbar, Typography } from '@mui/material';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div">
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: '700',
                letterSpacing: '.3rem',
              }}
              to="/"
            >
              PHONE book
            </Link>
          </Typography>
          {isLoggedIn ? <UserMenu /> : <Navigation />}
        </Toolbar>
      </AppBar>
    </>
  );
}
