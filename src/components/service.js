import React from 'react';

const Service = ({ name, price }) => {
  return (
    <div className="service">
      <h4>{name}</h4>
      <p>R${price}</p>
    </div>
  );
};

export default Service;
