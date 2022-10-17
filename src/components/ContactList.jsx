import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Paper,
} from '@mui/material';
import { AccountCircle} from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchContacts, deleteContact } from '../redux/contactsOperations';
import { selectFilter, selectContacts } from '../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    // тут setTimeout, что бы поменять очередность выполнения асинхронных функций при refresh страницы (запускается запрос на бэк за контактами и запросс за пользователем)
    setTimeout(() => {
      dispatch(fetchContacts());
    });
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filter?.toLowerCase();

    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsList = filteredContacts();

  return (
    <>
      {error && (
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: 'rgba(25, 118, 210, 0.5)',
            fontWeight: '700',
            letterSpacing: '.3rem',
          }}
        >
          Oops, something's wrong... Try again
        </Typography>
      )}
      <Stack
        
        direction="column-reverse"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        {contactsList.map(({ id, name, number }) => (
          <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', width: 500 }}>
          
              <AccountCircle color='primary' sx={{ mr: "10px", fontSize: 50 }} />
          

            <Box sx={{textAlign: 'center'}}>
              <Typography variant="h6" component="p" sx={{ fontWeight: '700', mb: '10px' }}>
                {name}
              </Typography>
              <Typography
                variant="h8"
                component="p"
                
                sx={{ display: 'inline-flex', justifyContent: 'center', letterSpacing: '.3rem' }}
              >
                {' '}
                <LocalPhoneIcon color="primary" sx={{mr: '10px'}} />
                {number}
              </Typography>
            </Box>

            <Tooltip title="Delete">
              <IconButton
                type="buton"
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Paper>
        ))}
      </Stack>
    </>
  );
};
