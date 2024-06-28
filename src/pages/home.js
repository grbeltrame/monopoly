// src/pages/Home.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socketClient from 'socket.io-client';

const socket = socketClient('http://localhost:4000');

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Registrar um evento de connect
    socket.on('connect', () => {
      console.log("Conectado!");
    });

    // Limpar a conexão do socket quando o componente é desmontado
    return () => {
      socket.off('connect');
    };
  }, []);

  return (
    <div className="container">
      <h2>MONOPOLY</h2>
      <div className="input__container">
        <label className="input__label">Username</label>
        <input placeholder="Enter your username" className="input" name="text" type="text" />
        <p className="input__description">What do you want to call yourself?</p>
      </div>
      <button className="learn-more" onClick={() => navigate('/chose-players')}>JOGAR EM GRUPO</button>
      <button className="learn-more" onClick={() => navigate('/chose-players')}>CONTRA IA</button>
      <button className="learn-more" onClick={() => navigate('/board')}>BOARD</button>
    </div>
  );
};

export default Home;
