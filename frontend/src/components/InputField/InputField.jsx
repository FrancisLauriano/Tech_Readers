import React from 'react';
import { StyledInput } from './InputField.styles';

const InputField = ({ placeholder, value, onChange, name, type = 'text' }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name} 
      type={type}
    />
  );
};

export default InputField;




