import React, { useState, useEffect } from 'react';
import playersData from '../../Data/player-data.json';
import HirePlayer from '../HirePlayer/HirePlayer';
import Player from '../Player/Player';
import './PlayersDashboard.css';

const PlayersDashboard = () => {
    const [players, setPlayers] = useState([]);
    const [hire, setHire] = useState([]);
    useEffect(() => {
        setPlayers(playersData)
    },[])
    // const handleHirePlayer = (hireNow) => {
    //     console.log('Hired!', hireNow);
    //     const newHire = [...hire, hireNow];
    //     setHire(newHire);
    // }
    // console.log("Con", players)
    const handleHirePlayer = (hireP) => {
        const newPlayer = [...hire, hireP];
        setHire(newPlayer);
    }
    return (
        <div>
            <div className="container">
                <div className="playersContainer">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            players.map(player => <Player key={player.id} handleHirePlayer={handleHirePlayer} player={player}></Player>)
                        }
                    </div>
                </div>
                <div className="hirePlayerContainer">
                    <HirePlayer hire={hire}></HirePlayer>
                </div>
            </div>
        </div>
    );
};

export default PlayersDashboard;