// src/pages/ChosePlayers.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChosePlayers.css'; // Import your CSS file

const ChosePlayers = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>QUANTOS JOGADORES?</h2>
      <div className="qtd">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="plusButton" onClick={() => navigate.push('/game-board')}>
            {num}
          </div>
        ))}
      </div>
      <button className="learn-more" onClick={() => navigate.push('/game-board')}>JOGAR</button>
    </div>
  );
};

export default ChosePlayers;
