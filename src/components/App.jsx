import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/authOperation';
import { PrivateRoute } from '../redux/PrivateRoute';
import { PublicRoute } from '../redux/PublicRoute';
import { Layout } from './Layout';
import { Register } from './Register';
import { Login } from './Login';
import { Contacts } from './Contacts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="login"
            element={
              <PublicRoute redirect="/contacts" restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirect="/contacts" restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirect="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
