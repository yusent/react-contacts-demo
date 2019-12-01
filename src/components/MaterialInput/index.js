import React from 'react';
import './index.css';

const textExtractValue = event => event.target.value;
const fileExtractValue = event => URL.createObjectURL(event.target.files[0]);

export default function({ label, onChange, type = 'text', value }) {
  const extractValue = type === 'file' ? fileExtractValue : textExtractValue;

  // Passing value prop to input with type 'file' throws an InvalidStateError.
  const extra = type === 'file' ? {} : { value };

  return (
    <div className="group">
      <input
        onChange={event => onChange(extractValue(event))}
        required
        type={type}
        {...extra}
      />

      <span className="bar" />
      <label>{label}</label>
    </div>
  );
}
