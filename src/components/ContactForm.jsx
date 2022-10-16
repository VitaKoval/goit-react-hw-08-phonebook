import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsOperations';
import { Box, TextField, Button } from '@mui/material';
// import {
//   FormForAddContact,
//   Label,
//   Input,
//   ButtomAddContact,
// } from './ui/ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { items } = useSelector(state => state.root.contacts);

  const newContact = {
    name,
    phone,
  };

  const dispatch = useDispatch();

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleChangeNumber = evt => {
    setPhone(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const findName = items.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (findName) {
      alert(`${name} is already in contacts`);
      setName('');
      setPhone('');
      return;
    }

    dispatch(addContact(newContact));

    setName('');
    setPhone('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
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
        value={phone}
        onChange={handleChangeNumber}
        required
      />

      <Button variant="outlined">Add contact</Button>
    </Box>
  );
}
