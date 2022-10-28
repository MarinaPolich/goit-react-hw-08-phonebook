import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FormBox, Label, Input, FormBtn } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ addContact }) => {
  const handelSubmit = (values, { resetForm }) => {
    if (addContact({ ...values, id: nanoid() })) resetForm();
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
