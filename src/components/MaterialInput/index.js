import React from 'react';
import './index.css';

export default function(props) {
  const type = props.type || 'text';

  return (
    <div className="group">
      <input
        onChange={event => props.onChange(event.target.value)}
        required
        type={type}
        value={props.value}
      />

      <span className="bar" />
      <label>{props.label}</label>
    </div>
  );
}
