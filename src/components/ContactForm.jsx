import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';
import { selectContacts } from "../redux/selectors";
import { addContact } from '../redux/contactsOperations';

export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(selectContacts);

  const newContact = {
    name,
    number,
  };

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const findName = items.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (findName) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Name"
        variant="standard"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={handleChangeName}
        required
      />
      <TextField
        label="Number"
        variant="standard"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={number}
        onChange={handleChangeNumber}
        required
      />

      <Button variant="outlined" type="submit">
        Add contact
      </Button>
    </Box>
  );
}
