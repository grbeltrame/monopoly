import React, { useEffect, useState } from 'react';
import socketClient from 'socket.io-client';

const socket = socketClient('http://localhost:4000');

const Monopoly = () => {

    useEffect(() => {
        // Registrar um evento de connect
        socket.on('connect', () => {
            console.log("Conectado!");
        });
    });

    const [players, setPlayers] = useState([
        { name: 'Jogador 1', money: 1000, properties: 0, services: 0, cards: 0, stations: 0 },
        { name: 'Jogador 2', money: 1000, properties: 0, services: 0, cards: 0, stations: 0 },
    ]);

    return (
        <div>
            {
                Object.keys(players)
                    .map((key) => {
                        return <div>{players[key].name}</div>
                    })
            }
        </div>
    )
}

