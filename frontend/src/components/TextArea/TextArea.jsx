import React from 'react';
import { StyledTextArea } from './TextArea.styles';

const TextArea = ({ placeholder, value, onChange }) => {
  return <StyledTextArea placeholder={placeholder} value={value} onChange={onChange} />;
};

export default TextArea;



