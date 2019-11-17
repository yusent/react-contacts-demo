import React from 'react';
import './contact-card.css';

export default function({ contact }) {
  return (
    <div className="contact-card">
      <img alt="contact" src={contact.picture} />

      <div className="contact-info">
        <p className="contact-name">
          {contact.name}
        </p>
      </div>
    </div>
  );
}
