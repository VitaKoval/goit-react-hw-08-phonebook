import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';
import { Layout } from './Layout';
import { Register } from './Register';
import { Login } from './Login';
import { Contacts } from './Contacts';
import { refreshUser } from '../redux/authOperation';
import { PrivateRoute } from '../redux/PrivateRoute';


function App() {
  const dispatch = useDispatch();
  // const { isLoading } = useSelector(state => state.root.contacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/contacts" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirect='/login'>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to='/contacts' />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
