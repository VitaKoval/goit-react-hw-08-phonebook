import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { selectContacts } from "../redux/selectors";
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Loader } from './ui/ContactList.styled';

export function Contacts() {
  const { isLoading } = useSelector(selectContacts);

  return (
    <>
      <Typography
        variant="h2"
        component="div"
        sx={{
          color: 'rgba(25, 118, 210, 0.2)',
          fontWeight: '700',
          letterSpacing: '.3rem',
          mb: '-50px',
        }}
      >
        Adding contacts
      </Typography>
      <ContactForm />
      <Box
        sx={{
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            color: 'rgba(25, 118, 210, 0.2)',
            fontWeight: '700',
            letterSpacing: '.3rem',
            mb: '-30px',
          }}
        >
          My contacts {isLoading && <Loader />}
        </Typography>

        <Filter />
        <ContactList />
      </Box>
    </>
  );
}
