import { Row, Col, Container, Table } from 'react-bootstrap';

function GameView({ gameData, homeTeam, roadTeam }) {

  console.log(gameData.scoreRecord);

  const grid = gameData.scoreRecord.slice(0, 1).map((data, index) =>
    <tr key={index}>
      <th>
        {data.players.map((player) =>
          <div>{player.num}</div>
        )}
      </th>

      <th>
        {data.players.map((player) =>
          <div>{player.name}</div>
        )}
      </th>
      <th>
        {data.players.map((player) =>
          <div>{player.pos}</div>
        )}
      </th>

      <th id="inning1" className="abContainer">
        <div id="ball1" className={data.ballCount >= 1 ? "countBox active" : "countBox" } />
        <div id="ball2" className={data.ballCount >= 2 ? "countBox active" : "countBox" } />
        <div id="ball3" className={data.ballCount >= 3 ? "countBox active" : "countBox" } />
        <div id="strike1" className={data.strikeCount >= 1 ? "countBox active" : "countBox" } />
        <div id="strike2" className={data.strikeCount >= 2 ? "countBox active" : "countBox" } />
        
        <div className="bases" />
        <div className="result">{data.result}</div>
        {data.out ? <div className="out">{data.outNum}</div> : null}
        {data.out && data.outNum === 3 ? <div className="inningChange"></div> : null}


      </th>
    </tr>
  );

  
  return (
    <>
      <Container fluid>
        <Row>
          <h1>GAME VIEW</h1>
        </Row>
        <Table hover bordered striped>
          <thead>
            <tr>
              <th width={20}>#</th>
              <th width={175}></th>
              <th width={20}>POS</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th width={20} >AB</th>
              <th width={20} >R</th>
              <th width={20} >H</th>
              <th width={20} >RBI</th>
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