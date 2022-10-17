import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Stack, ListItem, Tooltip, IconButton } from '@mui/material';
import { fetchContacts, deleteContact } from '../redux/contactsOperations';
import { ContactName } from './ui/ContactList.styled';
import DeleteIcon from '@mui/icons-material/Delete';


export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, error } = useSelector(state => state.root.contacts);
  const filter = useSelector(state => state.root.filter);

  useEffect(() => {
    // тут setTimeout, что бы поменять очередность выполнения асинхронных функций при refresh страницы (запускается запрос на бэк за контактами и запросс за пользователем)
    setTimeout(() => {
      dispatch(fetchContacts());
    });
  }, [dispatch]);

  // console.log(items);

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
      <Box sx={{ width: '100%' }}>
        <Stack
          spacing={3}
          direction="column-reverse"
          justifyContent="center"
          alignItems="center"
        >
          {contactsList.map(({ id, name, number }) => (
            <ListItem key={id} id={id}>
              <ContactName>{name}:</ContactName>
              {number}
              <Tooltip title="Delete">
                <IconButton type="buton"
                onClick={() => dispatch(deleteContact(id))}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              {/* <ButtonDelete
                type="buton"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </ButtonDelete> */}
            </ListItem>
          ))}
        </Stack>
      </Box>
    </>
  );
};
