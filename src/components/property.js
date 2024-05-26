import React from 'react';

const Property = ({ name, price }) => {
  return (
    <div className="property">
      <h4>{name}</h4>
      <p>R${price}</p>
    </div>
  );
};

export default Property;
