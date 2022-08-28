import { Component } from 'react';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { filterContacts } from './FilterContacts/FilterContacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    if (this.state.contacts.length !== prevState.contacts.length) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  addContact = contact => {
    if (this.state.contacts.some(cont => cont.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const filteredContacts = filterContacts(
      this.state.contacts,
      this.state.filter
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter handleFilter={this.filterContacts} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </div>
    );
  }
}
