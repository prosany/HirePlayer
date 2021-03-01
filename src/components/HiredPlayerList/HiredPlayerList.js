import React from 'react';
import './HiredPlayerList.css';

const HiredPlayerList = (props) => {
    // console.log(props.hiredPlayer)
    const hiredPlayerDetails = props.hiredPlayer;
    const { playerName, salary, picture} = hiredPlayerDetails;
    return (
        <div>
            <div className="playerdetails">
                <div className="playerPicture">
                    <img src={picture} alt={playerName} />
                </div>
                <div className="playerName">
                    {playerName}
                </div>
                <div className="playerSalary">
                    ${salary}
                </div>
            </div>
        </div>
    );
};

export default HiredPlayerList;