import React from 'react';
import { Formik } from 'formik';
import { FormBox, Label, Input } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getAllContacts } from 'redux/contacts/selectors';
import { Button } from '@mui/material';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handelSubmit = (values, { resetForm }) => {
    if (contacts.find(({ name }) => name === values.name)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ ...values }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelSubmit}>
      <FormBox autoComplete="off">
        <Label htmlFor="firstName">Ім'я та Прізвисько</Label>
        <Input
          id="firstName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="tel">Телефон</Label>
        <Input
          id="tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit" variant="outlined" color="secondary">
          Додати друга
        </Button>
      </FormBox>
    </Formik>
  );
};
