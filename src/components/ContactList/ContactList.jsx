import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
};
