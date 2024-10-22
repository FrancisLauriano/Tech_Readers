import styled from 'styled-components';

export const StyledReviewStars = styled.div`
  display: flex; 
  flex-direction: row; 
  gap: 5px; 
  align-items: center; 
`;

export const Star = styled.span`
  font-size: 24px;
  color: ${({ $filled }) => ($filled ? 'gold' : '#e4e5e9')}; 
  cursor: pointer; 
  transition: color 0.2s; 
`;







