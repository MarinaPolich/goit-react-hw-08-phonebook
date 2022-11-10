import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          removeContact={() => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
};
