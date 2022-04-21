import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ onCheckBoxChange, checked }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={onCheckBoxChange} checked={checked} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
