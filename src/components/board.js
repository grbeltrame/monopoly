import React from 'react';
import Property from './Property';
import Service from './Service';
import Station from './Station';
import Card from './Card';

const Board = () => {
  return (
    <div className="board">
      {/* Renderize aqui as propriedades, serviços, estações e cartas */}
      <Property name="M2" price={60} />
      <Service name="Companhia de Água" price={150} />
      <Station name="Estação Ferroviária" price={200} />
      <Card type="chance" />
      {/* Continue com os outros espaços do tabuleiro */}
    </div>
  );
};

export default Board;
