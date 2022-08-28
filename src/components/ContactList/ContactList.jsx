import PropTypes from 'prop-types';
import {
  Button,
  ContactItem,
  ContactText,
} from '../ContactList/ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactText>{name}: </ContactText>
            <ContactText>{number}</ContactText>
            <Button onClick={() => deleteContact(id)} type="button">
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
