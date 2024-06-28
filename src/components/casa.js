import React from 'react';

var corCasas= {
  "Boston Drive": "bg-blue-500",
  "Phoenix Drive": "bg-blue-500",
  "Vermont Drive": "bg-blue-500",
  "Pacific Drive": "bg-red-500",
  "Clemente Drive": "bg-red-500",
  "Almond Drive": "bg-red-500",
  "Atlanta Drive": "bg-orange-500",
  "New York Drive": "bg-orange-500",
  "Bethany Drive": "bg-orange-500",
  "States Drive": "bg-pink-500",
  "California Drive": "bg-pink-500",
  "Olivia Gardens": "bg-pink-500",
  "Kansas Drive": "bg-yellow-500",
  "San Diego Drive": "bg-yellow-500",
  "Salt Lake": "bg-blue-800",
  "Folklore Heights": "bg-blue-800",
  "Riverside": "bg-green-500",
  "Clement Drive": "bg-green-500",
  "Atlantic Drive": "bg-green-500",
  "Oakville": "bg-yellow-500",
  "Nashville Drive": "bg-yellow-500",
  "Rodeo Drive": "bg-yellow-500"
  };

  var coresJogadores = {
    1: "bg-red-500",
    2: "bg-blue-500",
    3: "bg-green-500",
    4: "bg-yellow-500"
  };

const Casa = ({name, classe, players, align, staticPosition}) => {
  const playersInCasa = players.filter(player => player.position === staticPosition);
  return (
    <div className={classe}>
      <div className={`text-center p-4 flex relative ${corCasas[name]} ${align === 'left' ? 'h-full w-min  justify-end' : align === 'right' ? 'h-full w-min  justify-start' : 'w-full  justify-center' }`}>
        <span className={`transform text-xs ${align === 'left' ? 'transform rotate-90 ' : align === 'right' ? '-rotate-90 ' : '' }`}>{name}</span>
        <div className='w-full h-full grid grid-cols-2'>
          {playersInCasa ? playersInCasa.map((player, index) => (
              <div className={`w-8 h-8 rounded-full ${coresJogadores[player.key]}`} key={index}></div>
          )) : null}
        </div>
      </div>
    </div>
  );
};

export default Casa;
