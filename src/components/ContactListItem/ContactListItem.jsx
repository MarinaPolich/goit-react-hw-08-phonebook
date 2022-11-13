import PropTypes from 'prop-types';
import { Item, ContactBtn } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, deleteContact }) => {
  return (
    <Item>
      {name}: {number}
      <ContactBtn onClick={deleteContact}>Delete</ContactBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
