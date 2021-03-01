import React from 'react';
import { useState } from 'react';
import './Player.css';

const Player = (props) => {
    const { playerName, workTitle, age, born, country, salary, picture } = props.player;
    const [btnDisable, setBtnDisable] = useState(false);
    // console.log(props.player);
    return (
        <div>
            <div className="col">
                <div className="card h-100 playerImg">
                    <img src={picture} className="card-img-top" alt={playerName} />
                    <div className="playerDetails">
                        <div className="player-name">{playerName}</div>
                        <div className="player-workTitle">{workTitle}</div>
                        <div className="player-country"><span>Country:</span> {country}</div>
                        <div className="player-age"><span>Age:</span> {age}</div>
                        <div className="player-born"><span>Date of Birth:</span> {born}</div>
                        <div className="player-salary">Hiring Cost: ${salary}</div>
                        <button type="button" className={btnDisable ? "btn btn-warning btn-sm disable" : "btn btn-warning btn-sm"}
                        onClick={() => {
                            props.handleHirePlayer(props.player);
                            setBtnDisable(true);
                          }}>Hire {playerName}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;