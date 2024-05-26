import React from 'react';

const Station = ({ name, price }) => {
  return (
    <div className="station">
      <h4>{name}</h4>
      <p>R${price}</p>
    </div>
  );
};

export default Station;
