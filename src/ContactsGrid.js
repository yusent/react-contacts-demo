import React from 'react';
import ContactCard from './ContactCard';
import contactPicture from './placeholder.jpg';

const contact = {
  name: 'Peter Parker',
  phoneNumber: '(664) 213-2131',
  picture: contactPicture,
};

export default function() {
  return <ContactCard contact={contact} />;
}
