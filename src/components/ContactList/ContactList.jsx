import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getFilterContacts } from 'redux/contacts/selectors';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  return (
    <Grid item xs={12} md={6}>
      <List dense={true}>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => dispatch(deleteContact(id))}
          />
        ))}
      </List>
    </Grid>
  );
};
