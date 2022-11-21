import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import {
  Container,
  ContactTitle,
  ContactTitleSecond,
} from '../components/App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactTitle>Телефона книга</ContactTitle>
      <ContactForm />
      <ContactTitleSecond>Список друзів</ContactTitleSecond>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};

export default Contacts;
