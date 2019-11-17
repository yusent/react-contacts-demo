import React from 'react';
import ContactCard from './ContactCard';
import contactPicture from './placeholder.jpg';

const contacts = [
  {
    name: 'Peter Parker',
    phoneNumber: '(664) 213-2131',
    picture: contactPicture,
  },
  {
    name: 'Clark Kent',
    phoneNumber: '(664) 213-2131',
    picture: contactPicture,
  },
  {
    name: 'Matt Murdock',
    phoneNumber: '(664) 234-1234',
    picture: contactPicture,
  },
  {
    name: 'Jessica Jones',
    phoneNumber: '(664) 234-1234',
    picture: contactPicture,
  },
];

export default function() {
  return (
    <div id="grid">
      {contacts.map(contact => <ContactCard contact={contact} />)}
    </div>
  );
}
