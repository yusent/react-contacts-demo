import React from 'react';
import './index.css';

export default function(props) {
  return (
    <div className="group">
      <input
        onChange={event => props.onChange(event.target.value)}
        required
        type="text"
        value={props.value}
      />

      <span className="bar" />
      <label>{props.label}</label>
    </div>
  );
}
