import { Row, Col, Container, Table } from 'react-bootstrap';

function GameView({ gameData, homeTeam, roadTeam }) {

  const scorecardData = homeTeam.roster;

  const grid = scorecardData.map((data, index) =>
    <tr key={index}>
      <th className="cardBox" >{data}</th>
      <th className="abContainer">
        <div id="ball1" className="countBox" />
        <div id="ball2" className="countBox" />
        <div id="ball3" className="countBox" />
        <div id="strike1" className="countBox" />
        <div id="strike2" className="countBox" />
        <div className="bases" />
        <div className="result">8-6-4-2-6-7-5-5-5-4</div>
      </th>
    </tr>
  );

  return (
    <>
      <Container fluid>
        <Row>
          <h1>GAME VIEW</h1>
        </Row>
        <Table hover striped>
          <thead>
            <tr>
              <th className="numBox" width={200}></th>
              <th className="numBox" >1</th>
              <th className="numBox" >2</th>
              <th className="numBox" >3</th>
              <th className="numBox" >4</th>
              <th className="numBox" >5</th>
              <th className="numBox" >6</th>
              <th className="numBox" >7</th>
              <th className="numBox" >8</th>
              <th className="numBox" >9</th>
              <th className="numBox" >Stats</th>
            </tr>
          </thead>

          <tbody>
            {grid}
          </tbody>
        </Table>

      </Container>
    </>

  );
}

export default GameView;