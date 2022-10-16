import { useSelector } from 'react-redux';
import { Box, TextField, Button, Typography } from '@mui/material';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Loader } from './ui/ContactList.styled';

export function Contacts() {
 const { isLoading } = useSelector(state => state.root.contacts);

  return (
    <>
      {/* <Typography variant="h5" component="div">Phonebook</Typography> */}
      {/* <h1>Phonebook</h1> */}
      <ContactForm />
<Box
        sx={{
        // borderTop: '1px solid #1976d2', 
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      }}
    >
      <Typography variant="h5" component="div" >My contacts {isLoading && <Loader />}</Typography>
      </Box>
        <Filter />
      <ContactList />
    </>
  );
}
