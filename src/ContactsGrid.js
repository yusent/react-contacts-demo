import React, { useEffect, useState } from 'react';
import { getAll, remove } from './crud';
import ContactCard from './ContactCard';

export default function() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await getAll();
      const response = await result.json();
      setContacts(response.data);
    };

    fetchContacts();
  }, []);

  const deleteContact = async (contact) => {
    const result = await remove(contact.id);

    if (result.ok) {
      setContacts(contacts.filter(c => c !== contact));
    }
  };

  return (
    <>
      <h1>Contacts</h1>

      <div id="grid">
        {contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={() => deleteContact(contact)}
          />
        ))}
      </div>
    </>
  );
}
