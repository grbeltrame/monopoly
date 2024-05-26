// src/pages/ChosePlayers.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './ChosePlayers.css'; // Import your CSS file

const ChosePlayers = () => {
  const history = useHistory();

  return (
    <div className="container">
      <h2>QUANTOS JOGADORES?</h2>
      <div className="qtd">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="plusButton" onClick={() => history.push('/game-board')}>
            {num}
          </div>
        ))}
      </div>
      <button className="learn-more" onClick={() => history.push('/game-board')}>JOGAR</button>
    </div>
  );
};

export default ChosePlayers;
