import { useEffect, useState } from 'react';
import { Container, ContactTitle, ContactTitleSecond } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return false;
    }
    setContacts(prev => [...prev, contact]);
    return true;
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  return (
    <Container>
      <ContactTitle>Phonebook</ContactTitle>
      <ContactForm addContact={addContact} />

      <ContactTitleSecond>Contacts</ContactTitleSecond>
      <Filter onChange={setFilter} value={filter} />
      <ContactList contacts={filterContacts()} removeContact={removeContact} />
    </Container>
  );
};
