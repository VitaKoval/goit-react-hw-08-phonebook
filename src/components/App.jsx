import { ContactForm } from './ContactForm';
import { Container } from './ui/App.styled';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useSelector } from 'react-redux';
import { Loader } from './ui/ContactList.styled';

function App() {
  const { isLoading } = useSelector(state => state.root.contacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts {isLoading && <Loader />}</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
