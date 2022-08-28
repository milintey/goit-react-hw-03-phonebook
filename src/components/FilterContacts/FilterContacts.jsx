export function filterContacts(contacts, filter) {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
}
