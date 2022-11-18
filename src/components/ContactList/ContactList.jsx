import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getFilterContacts } from 'redux/contacts/selectors';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsAPI';

export const ContactList = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getFilterContacts);
  const data = useGetContactsQuery();
  console.log('data :>> ', data);
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul>
      {data.data?.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
};
