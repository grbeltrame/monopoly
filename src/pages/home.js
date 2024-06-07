// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import your CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>MONOPOLY</h2>
      <div className="input__container">
        <label className="input__label">Username</label>
        <input placeholder="Enter your username" className="input" name="text" type="text" />
        <p className="input__description">What do you want to call yourself?</p>
      </div>
      <button className="learn-more" onClick={() => navigate.push('/chose-players')}>JOGAR EM GRUPO</button>
      <button className="learn-more" onClick={() => navigate.push('/chose-players')}>CONTRA IA</button>
    </div>
  );
};

export default Home;
