import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsOperations';
import {
  FormForAddContact,
  Label,
  Input,
  ButtomAddContact,
} from './ui/ContactForm.styled';

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
    <FormForAddContact onSubmit={handleSubmit}>
      <Label htmlFor="ContactName">Name</Label>
      <Input
        type="text"
        name="name"
        id="ContactName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Enter a name to add to contacts"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChangeName}
        required
      />

      <Label htmlFor="ContactNumber">Number </Label>
      <Input
        type="tel"
        name="number"
        id="ContactNumber"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        placeholder="Enter a phone number to add to contacts"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={phone}
        onChange={handleChangeNumber}
        required
      />

      <ButtomAddContact type="submit">Add contact</ButtomAddContact>
    </FormForAddContact>
  );
}
