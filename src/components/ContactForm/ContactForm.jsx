import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FormBox, Label, Input, FormBtn } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getAllContacts } from 'redux/selectors';

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
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelSubmit}>
      <FormBox autoComplete="off">
        <Label htmlFor="firstName">Name</Label>
        <Input
          id="firstName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="tel">Number</Label>
        <Input
          id="tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </FormBox>
    </Formik>
  );
};
