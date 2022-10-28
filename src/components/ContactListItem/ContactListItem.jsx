import PropTypes from 'prop-types';
import { Item, ContactBtn } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, removeContact }) => {
  return (
    <Item>
      {name}: {number}
      <ContactBtn onClick={removeContact}>Delete</ContactBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
