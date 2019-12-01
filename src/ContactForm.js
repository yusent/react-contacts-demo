import React, { useState } from 'react';
import { create } from './crud';
import MaterialInput from './components/MaterialInput';

export default function(props) {
  const className = props.visible ? 'modal-wrapper' : 'modal-wrapper display-none';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const createContact = async () => {
    const result = await create({
      avatar,
      email,
      first_name: firstName,
      last_name: lastName,
    });

    if (result.ok) {
      props.onContactAdded({
        avatar,
        email,
        first_name: firstName,
        last_name: lastName,
      });

      props.onOverlayClick();
    }
  };

  return (
    <div className={className}>
      <div className="overlay" onClick={props.onOverlayClick} />

      <div className="modal-content">
        <div className="modal-body">
          <MaterialInput
            label="First Name"
            onChange={setFirstName}
            value={firstName}
          />

          <MaterialInput
            label="Last Name"
            onChange={setLastName}
            value={lastName}
          />

          <MaterialInput
            label="Email"
            onChange={setEmail}
            value={email}
          />

          <MaterialInput
            label="Avatar"
            onChange={setAvatar}
            type="file"
            value={avatar}
          />
        </div>

        <div className="modal-actions">
          <button onClick={props.onOverlayClick}>
            cancel
          </button>

          <button onClick={createContact}>
            accept
          </button>
        </div>
      </div>
    </div>
  );
}
