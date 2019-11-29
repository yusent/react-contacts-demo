import React, { useEffect, useState } from 'react';
import { getAll, remove } from './crud';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

export default function() {
  const [contacts, setContacts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const toggleModal = (visible) => () => {
    setModalVisible(visible);
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

      <button id="fab" onClick={toggleModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white" />
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </button>

      <ContactForm onOverlayClick={toggleModal(false)} visible={modalVisible} />
    </>
  );
}
