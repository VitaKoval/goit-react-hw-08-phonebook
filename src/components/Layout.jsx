// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ pt: '20px', pb: '20px' }}>
        <Outlet />
      </Container>
    </div>
  );
};
