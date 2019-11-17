import React, { useEffect, useState } from 'react';
import { getAll } from './crud';
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

  return (
    <div id="grid">
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
}
