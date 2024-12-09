import React from 'react';
import { StyledCard } from './Card.styled';
const Card = ({ children, style }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
