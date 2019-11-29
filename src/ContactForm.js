import React, { useState } from 'react';
import MaterialInput from './components/MaterialInput';

export default function(props) {
  const className = props.visible ? 'modal-wrapper' : 'modal-wrapper display-none';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

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
        </div>

        <div className="modal-actions">
          <button onClick={props.onOverlayClick}>
            cancel
          </button>

          <button>
            accept
          </button>
        </div>
      </div>
    </div>
  );
}
