import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PlayersDashboard from './components/PlayersDashboard/PlayersDashboard';

function App() {
  return (
    <div className="App body">
      <Header></Header>
      <PlayersDashboard></PlayersDashboard>
    </div>
  );
}

export default App;
