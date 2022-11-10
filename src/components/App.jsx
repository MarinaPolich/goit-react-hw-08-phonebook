import { Container, ContactTitle, ContactTitleSecond } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <ContactTitle>Phonebook</ContactTitle>
      <ContactForm />
      <ContactTitleSecond>Contacts</ContactTitleSecond>
      <Filter />
      <ContactList />
    </Container>
  );
};
