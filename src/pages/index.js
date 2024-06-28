// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

var coresJogadores = {
    1: "bg-red-500",
    2: "bg-blue-500",
    3: "bg-green-500",
    4: "bg-yellow-500"
  };

const Index = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);

    const addPlayer = (isAI) => {
        if (players.length >= 4) {
            return;
        }

        const playerType = isAI ? `Bot ${players.length + 1}` : `Jogador ${players.length + 1}`;
        const newPlayer = {
            name: playerType,
            isAI: isAI,
            key: players.length + 1,
        };
        setPlayers([...players, newPlayer]);
    };

    const changePlayerName = (index, newName) => {
        const updatedPlayers = [...players];
        if (!players[index].isAI) {
            updatedPlayers[index].name = newName;
            setPlayers(updatedPlayers);
        }
    };
    
    useEffect(() => {
        
    }, []);
    
    const startGame = () => {
        navigate('/board', { state: { players } });
    };
    
    return (
        <div className='bg-slate-100 w-full h-full flex gap-4 flex-col justify-center align-center content-center items-center'>
            <div className='flex flex-col gap-4 justify-center content-center items-center'>
                <h3>**Condição**</h3>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li>É preciso ter pelo menos dois jogadores ou um jogador e um BOT.</li>
                    <li>Máximo de 4 jogadores.</li>
                </ul>
            </div>
            <div className='flex gap-4 mb-2'>
                <Button variant="contained" className='' onClick={() => addPlayer(false)}>Adicionar Jogador</Button>
                <Button variant="outlined" className='' onClick={() => addPlayer(true)}>Adicionar BOT</Button>
            </div>
            <div className='flex flex-col gap-4'>
                {players.map((player, index) => (
                    <div className='flex gap-4 justify-between'>
                        <div className='flex gap-2 justify-center items-center content-center' key={index}>
                            <div className={`w-4 h-4 rounded-full ${coresJogadores[player.key]}`}></div> 
                            {player.isAI ? (
                                <TextField
                                disabled
                                id="outlined-disabled"
                                label="BOT"
                                defaultValue={player.name}
                              />
                            ) : (
                                <TextField
                                    id="outlined"
                                    label="Nome do Jogador"
                                    defaultValue={player.name}
                                    onChange={(e) => changePlayerName(index, e.target.value)}
                                />
                            )}
                        </div>
                        <Button variant='outlined' onClick={() => setPlayers(players.filter((_, i) => i !== index))} startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <div className='flex gap-4'>
                <Button variant="contained" disabled={(players.length < 2 && players.filter(player => !player.isAI).length == 0)} onClick={startGame}>Iniciar Jogo</Button>
            </div>
        </div>
    );
};

export default Index;
