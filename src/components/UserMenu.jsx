import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import { AccountCircle, Logout } from '@mui/icons-material';
import { selectUserEmail, selectUserName } from '../redux/selectors';
import { logOut } from '../redux/authOperation';

export function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
      }}
    >
      <IconButton size="small" edge="start" color="inherit" aria-label="menu">
        <AccountCircle sx={{ mr: 1 }} /> {userName}
      </IconButton>

      <p style={{ margin: '3px' }}>{userEmail}</p>
      <Button onClick={() => dispatch(logOut())} color="inherit">
        <Logout fontSize="small" sx={{ mr: 1 }} />
        Logout{' '}
      </Button>
    </div>
  );
}
