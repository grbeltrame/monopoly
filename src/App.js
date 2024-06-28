// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ChosePlayers from './pages/choseplayers';
import GameBoard from './pages/gameboard';
import Index from './pages/index';
import Board from './components/board';

function App() {
  return (
    <Router>
      <div className="App h-screen w-screen">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chose-players" element={<ChosePlayers />} />
          <Route path="/game-board" element={<GameBoard />} />
          <Route path="/" element={<Index/>} />
          <Route path="/board" element={<Board/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
