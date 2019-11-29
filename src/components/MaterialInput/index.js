import React from 'react';
import './index.css';

export default function(props) {
  return (
    <div className="group">
      <input type="text" required />
      <span className="bar" />
      <label>{props.label}</label>
    </div>
  );
}
