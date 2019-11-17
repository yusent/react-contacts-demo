import React from 'react';
import editIcon from './assets/edit.svg';
import deleteIcon from './assets/delete.svg';

export default function({ contact }) {
  return (
    <div className="contact-card">
      <img alt="contact" src={contact.avatar} />

      <div className="contact-info">
        <p className="contact-name">
          {contact.name}
        </p>

        <p className="contact-email">
          {contact.email}
        </p>

        <button className="action-button">
          <img alt="edit button" src={editIcon} />
        </button>

        <button className="action-button">
          <img alt="delete button" src={deleteIcon} />
        </button>
      </div>
    </div>
  );
}
