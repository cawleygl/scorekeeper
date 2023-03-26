import { Row, Col, Container, Table } from 'react-bootstrap';

function GameView({ gameData, homeTeam, roadTeam }) {

  const homePlayers = homeTeam.lineup;

  console.log("ScoreRecord:", gameData.scoreRecord);
  console.log("Home Team:", homePlayers);

  function inningCol(data, index) {

    const baseRender = (totalBases, outOnBases, reachBase) => {
      if (!reachBase || !totalBases) return <div className="bases empty" ></div>

      var basesClass = "";
      var markerClass = "";

      switch (totalBases) {
        case 1:
          if (outOnBases) {
            markerClass = "secondBaseOutMarker";
            basesClass = "outlineToSecond";
          } else {
            basesClass = "outlineToFirst";
          }
          break;
        case 2:
          if (outOnBases) {
            markerClass = "thirdBaseOutMarker";
            basesClass = "outlineToThird";
          } else {
            basesClass = "outlineToSecond";
          }
          break;
        case 3:
          if (outOnBases) {
            markerClass = "homePlateOutMarker";
            basesClass = "outlineToHome";
          } else {
            basesClass = "outlineToThird";
          }
          break;
        case 4:
          basesClass = "fill";
          if (outOnBases) console.warn("Unknown Base Configuration:\n***\n Out On Bases and 4 Total Bases\n***");
          break;
        default:
          console.warn("Unknown Base Configuration:\n***\nReached Base: ", reachBase, "\nTotal Bases: ", totalBases, "\nOut On Bases: ", outOnBases + "\n***\n");
          break;
      }

      return <>
        <div className={"bases " + basesClass} />
        {outOnBases ? <div className={"outMarker " + markerClass}>x</div> : null}
      </>

    }

    return <th>
      <div className="abContainer">

        <div className={data.ballCount >= 1 ? "countBox ball1 active" : "countBox ball1"} />
        <div className={data.ballCount >= 2 ? "countBox ball2 active" : "countBox ball2"} />
        <div className={data.ballCount >= 3 ? "countBox ball3 active" : "countBox ball3"} />
        <div className={data.strikeCount >= 1 ? "countBox strike1 active" : "countBox strike1"} />
        <div className={data.strikeCount >= 2 ? "countBox strike2 active" : "countBox strike2"} />

        {data.firstBaseResult ? <div className="firstBaseResult">{data.firstBaseResult}</div> : null}
        {data.secondBaseResult ? <div className="secondBaseResult">{data.secondBaseResult}</div> : null}
        {data.thirdBaseResult ? <div className="thirdBaseResult">{data.thirdBaseResult}</div> : null}
        {data.homeResult ? <div className="homeResult">{data.homeResult}</div> : null}

        {baseRender(data.totalBases, data.outOnBases, data.reachBase,)}

        {!data.reachBase && data.outResult ? <div className="outResult">{data.outResult}</div> : null}
        {(!data.reachBase || data.outOnBases) && data.outNum ? <div className="out">{data.outNum}</div> : null}
        {(!data.reachBase || data.outOnBases) && data.outNum === 3 ? <div className="inningChange"></div> : null}

      </div>
    </th>

  }


  function tableRow(data, index) {
    let innings = data.abData;
    console.log("Innings: ", innings);

    if (data.abData.length < 9) {
      console.log("Incomplete Grid:", innings.length, 9-innings.length);

      let addInnings = new Array(9 - data.abData.length);

      addInnings.fill(
        {
          "inning": 0,
          "ballCount": 0,
          "strikeCount": 0,

          "reachBase": false,
          "outOnBases": false,
          "outNum": 0,

          "totalBases": 0,

          "outResult": "",
          "firstBaseResult": "",
          "secondBaseResult": "",
          "thirdBaseResult": "",
          "homeResult": ""
        }

      );
      innings = innings.concat(addInnings);
    }

    const inningsRender = innings.map((ab, index) => inningCol(ab, index));

    return <>
      <tr key={index}>

        {/* Player Numbers Mapped from Roster */}
        <th>
          {data.playerIDs.map((playerID) =>
            <div>{homePlayers.find(player => playerID === player.id).num}</div>
          )}
        </th>

        {/* Player Names Mapped from Roster */}
        <th>
          {data.playerIDs.map((playerID) =>
            <div>{homePlayers.find(player => playerID === player.id).name}</div>
          )}
        </th>

        {/* Player Position from Game Data */}
        <th>
          {data.playerPos.map((Pos) =>
            <div>{Pos}</div>
          )}
        </th>

        {inningsRender}

      </tr>

    </>
  }

  const gameGrid = gameData.scoreRecord.map((data, index) =>
    <>
      {tableRow(data, index)}
    </>
  );


  return (
    <>
      <Container fluid>
        <Row>
          <h1>GAME VIEW</h1>
        </Row>
        <Table id="gameViewTable" hover bordered striped>
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
            {gameGrid}
          </tbody>
        </Table>

      </Container>
    </>

  );
}

export default GameView;