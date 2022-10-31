import React, { Component } from 'react';
import { Container, ContactTitle, ContactTitleSecond } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return false;
    }
    this.setState(prev => {
      return { contacts: [...prev.contacts, contact] };
    });
    return true;
  };

  filterChange = filter => {
    this.setState({ filter });
  };

  filterContacts = () => {
    return !this.state.filter
      ? this.state.contacts
      : this.state.contacts.filter(({ name }) =>
          name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <ContactTitle>Phonebook</ContactTitle>
        <ContactForm addContact={this.addContact} />

        <ContactTitleSecond>Contacts</ContactTitleSecond>
        <Filter onChange={this.filterChange} value={this.state.filter} />
        <ContactList
          contacts={this.filterContacts()}
          removeContact={this.removeContact}
        />
      </Container>
    );
  }
}
