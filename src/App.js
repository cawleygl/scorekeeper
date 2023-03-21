import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import GameView from './GameView';


function App() {
  return (
    <Container>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GameView />} />
      </Routes>
    </BrowserRouter>
  </Container>

  );
}

export default App;
