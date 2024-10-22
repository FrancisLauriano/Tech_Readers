import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, onClick, ...props }) => {
  return <StyledButton onClick={onClick} {...props}>{children}</StyledButton>;
};

export default Button;



