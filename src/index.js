import React from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';
import contactPicture from './placeholder.jpg';

const contact = {
  name: 'Peter Parker',
  phoneNumber: '(664) 213-2131',
  picture: contactPicture,
};

ReactDOM.render(
  <ContactCard contact={contact} />,
  document.getElementById('root')
);
