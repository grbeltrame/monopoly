import React from 'react';

const Player = ({ player }) => {
  return (
    <div className="player-info">
      <h3>{player.name}</h3>
      <p>R${player.money},00</p>
      <p>Qtd prop: {player.properties}</p>
      <p>Qtd serviços: {player.services}</p>
      <p>Qtd cartas: {player.cards}</p>
      <p>Qtd estações: {player.stations}</p>
    </div>
  );
};

export default Player;
