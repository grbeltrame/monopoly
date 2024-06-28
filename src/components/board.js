import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Casa from './casa';
import '../index.css';
import { useState } from 'react';

import rollTwoDice from './utils/dado.js';

const Board = () => {
    const location = useLocation();
    const initialPlayers = location.state.players.map(player => ({ ...player, position: 1 }));
    const [players, setPlayers] = useState(initialPlayers);

    const movePlayer = (playerIndex, steps) => {
        setPlayers(prevPlayers => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[playerIndex].position += steps;
            if (updatedPlayers[playerIndex].position > 40) {
                updatedPlayers[playerIndex].position = updatedPlayers[playerIndex].position % 40 || 40;
            }
            console.log(updatedPlayers[playerIndex].position);
            return updatedPlayers;
        });
    };

    return (
        <div className="flex flex-col justify-between bg-slate-400 w-full h-full">
            <div className='flex w-full h-40 justify-between align-center content-center'>
                <Casa players={players} align="top" classe="bg-red-400 w-2/12 h-2/12" staticPosition={21} name="Free Parking"/>
                <div className='w-full flex justify-around align-center content-center'>
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={22} name = "Almond Drive" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={23} name = "Chance" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={24} name = "Clemente Drive" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={25} name = "Pacific Drive" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={26} name = "Water Works" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={27} name = "Rodeo Drive" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={28} name = "Nashville Drive" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={29} name = "Railroad" />
                    <Casa players={players} align="top" classe="bg-red-100 border-x border-black flex-1" staticPosition={30} name = "Oakville" />
                    </div>  
                    <Casa players={players} align="top" classe="bg-red-400 w-2/12 h-2/12" staticPosition={31} name = "Go to Jail" />
                    </div>
                    <div className='flex h-full justify-between align-center content-center'>
                    <div className='h-full w-48 flex flex-col justify-around align-center content-center'>
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={20} name = "Atlanta Drive" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={19} name = "New York Drive" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={18} name = "Community Chest" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={17} name = "Bethany Drive" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={16} name = "Manhattan Railroad" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={15} name = "States Drive" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={14} name = "California Drive" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={13} name = "Car Company" />
                    <Casa players={players} align="left" classe="bg-red-100 border-y border-black flex-1 flex justify-end" staticPosition={12} name = "Olivia Gardens" />
                </div>
                <div>
                    <Button variant="contained" onClick={() => movePlayer(0, rollTwoDice())}>Rolar Dados</Button>
                </div>
                <div className='h-full w-48 flex flex-col justify-around align-center content-center'>
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={32} name = "Atlantic Drive" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={33} name = "Clement Drive" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={34} name = "Community Chest" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={35} name = "Riverside" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={36} name = "Short Line" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={37} name = "Chance" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={38} name = "Folklore Heights" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={39} name = "Luxury Tax" />
                    <Casa players={players} align="right" classe="bg-red-100 border-y border-black flex-1" staticPosition={40} name = "Salt Lake" />
                </div>
            </div>
            <div className='flex w-full h-40 justify-between align-center content-center'>
                <Casa players={players} align="bottom" classe="bg-red-400 w-2/12 h-2/12" staticPosition={11} name = "Jail" />
                <div className=' w-full flex justify-around align-center content-center'>
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={10} name = "Boston Drive" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={9} name = "Phoenix Drive" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={8} name = "Chance" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={7} name = "Vermont Drive" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={6} name = "Beverly Railroad" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={5} name = "Income Tax" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={4} name = "Kansas Drive" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={3} name = "Community Chest" />
                    <Casa players={players} align="bottom" classe="bg-red-100 border-x border-black flex-1" staticPosition={2} name = "San Diego Drive" />
                </div>
                <Casa players={players} align="bottom" classe="bg-red-400 w-2/12 h-2/12" staticPosition={1} name = "INICIO" />
            </div>
        </div>
    );
};

export default Board;
