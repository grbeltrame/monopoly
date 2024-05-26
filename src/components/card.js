import React from 'react';

const Card = ({ type }) => {
  return (
    <div className={`card ${type}`}>
      <h4>{type === 'chance' ? 'Chance' : 'Community Chest'}</h4>
      {/* Adicione mais detalhes da carta aqui */}
    </div>
  );
};

export default Card;
