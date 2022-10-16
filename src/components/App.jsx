import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';
import { Layout } from './Layout';
import { Register } from './Register';
import { Login } from './Login';
import { Contacts } from './Contacts';
import { refreshUser } from "../redux/authOperation";
import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { ContactForm } from './ContactForm';
// import { Container } from './ui/App.styled';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';
// import { Loader } from './ui/ContactList.styled';

function App() {
  const dispatch = useDispatch();
  // const { isLoading } = useSelector(state => state.root.contacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(()=>{dispatch(refreshUser())}, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isLoggedIn?<Navigate to="/contacts" />: <Navigate to='/login'/>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="contacts"
            element={
              isLoggedIn ? (
                <Contacts />
              ) : (
                <div>Login to your account or register</div>
              )
            }
          />
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </>

    // <Container>
    //     <h1>Phonebook</h1>
    //     <ContactForm />

    //     <h2>Contacts {isLoading && <Loader />}</h2>
    //     <Filter />
    //     <ContactList />
    //   </Container>
  );
}

export default App;
