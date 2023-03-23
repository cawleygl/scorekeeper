import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { Container } from 'react-bootstrap';
import GameView from './GameView';

import sampleData from './sampleData.json';


function App() {


  var gameData = sampleData.games[0];
  var homeTeam = sampleData.teams[0];
  var roadTeam = sampleData.teams[1];


  return (
    <Container>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GameView gameData={gameData} homeTeam={homeTeam} roadTeam={roadTeam} />} />
      </Routes>
    </BrowserRouter>
  </Container>

  );
}

export default App;
