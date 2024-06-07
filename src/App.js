// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ChosePlayers from './pages/choseplayers';
import GameBoard from './pages/gameboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chose-players" element={<ChosePlayers />} />
          <Route path="/game-board" element={<GameBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
