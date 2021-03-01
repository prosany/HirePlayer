import React from 'react';
import HiredPlayerList from '../HiredPlayerList/HiredPlayerList';
import './HirePlayer.css';

const HirePlayer = (props) => {
    console.log("Some", props.hire)
    const hiredPlayerList = props.hire;
    const hiredPlayerSalary = hiredPlayerList.reduce((total, PlayerSalary) => total + PlayerSalary.salary, 0);
    return (
        <div id="fixedSideBar">
            {/* <h3>Player Added! {hiredPlayerList.length}</h3>
            <div className="hiredPlayerList">
                {
                    hiredPlayerList.map((hiredPlayer) => <HiredPlayerList hiredPlayer={hiredPlayer}></HiredPlayerList>)
                }
            </div>
            <h6>Total Salary: {hiredPlayerSalary}</h6> */}
            <div className="hiredPlayerLists">
                <div className="playeradded">
                    <strong>Selected Player: {hiredPlayerList.length}</strong>
                </div>
                <div className="selectedplayerinfo">
                    {
                        hiredPlayerList.map((hiredPlayer) => <HiredPlayerList hiredPlayer={hiredPlayer}></HiredPlayerList>)
                    }
                </div>
                <div className="playerhireamount">
                    <strong>Total Amount: ${hiredPlayerSalary}</strong>
                    <div className="hireBtn">
                        <button type="button" class="btn btn-warning btn-sm">Complete Hiring ({hiredPlayerList.length})</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HirePlayer;