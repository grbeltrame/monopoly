// src/pages/GameBoard.js
import React, { useState } from 'react';
import Board from '../components/board';
import Player from '../components/player';

const GameBoard = () => {
  const [players, setPlayers] = useState([
    { name: 'Jogador 1', money: 1000, properties: 0, services: 0, cards: 0, stations: 0 },
    { name: 'Jogador 2', money: 1000, properties: 0, services: 0, cards: 0, stations: 0 },
  ]);

  const rollDice = () => {
    // Função para rolar os dados e mover o jogador
  };

  return (
    <div className="game">
      <div className="board-container">
        <Board />
      </div>
      <div className="players-info">
        {players.map((player, index) => (
          <Player key={index} player={player} />
        ))}
      </div>
      <button onClick={rollDice}>Rolar Dados</button>
    </div>
  );
};

export default GameBoard;
