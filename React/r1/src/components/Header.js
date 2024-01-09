import React from 'react';
import dog from '../assets/dog.webp';

export const Header = () => {
  return (
    <div>
      <img className="dog" src={dog} alt="Dog" />
    </div>
  );
};
    