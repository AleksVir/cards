import React from 'react';
import './Card.css';

const Card = ({
  children,
  className = '',
  bgColor = '',
  horizontal = false,
  ...props
}) => {
  const baseClass = 'card';
  const classes = [
    baseClass,
    bgColor && `bg-${bgColor}`,
    horizontal && 'flex-row',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
