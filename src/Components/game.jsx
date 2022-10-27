import scissor from "../images/scissor.jpg";
import rock from "../images/rock.jpg";
import paper from "../images/paper.jpg";
import what from "../images/what.jpg";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Choice from "./Choice";
export default function Game() {
  const [choice, setChoice] = useState([scissor, rock, paper]);
  const [xChoice, setXchoice] = useState([]);
  const [computer, setComputer] = useState([]);
  const [humainResult, setHumainResult] = useState(0);
  const [computerResult, setComputerResult] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [phrase, setPhrase] = useState("");
  const [deleted, setDeleted] = useState(0);

  let pointsSave = localStorage.getItem("points")
    ? JSON.parse(localStorage.getItem("points"))
    : [];

  const letChoice = (choic) => {
    setXchoice(choic);

    computerChoice();
    // checkWinner();
    setClicked(1);
    setDeleted(0);
  };

  const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    const comp = choice[randomNumber];

    setComputer(comp);
  };

  useEffect(() => {
    if (computer === paper && xChoice === scissor) {
      setHumainResult((humainResult) => (humainResult += 1));
      // pointsSave.push(humainResult);
      setComputerResult(computerResult);
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "You win"));
    }
    if (computer === scissor && xChoice === paper) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "Computer win"));
    }
    if (computer === paper && xChoice === rock) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "Computer win"));
    }
    if (computer === rock && xChoice === paper) {
      setHumainResult((humainResult) => (humainResult += 1));
      setComputerResult(computerResult);
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "You win"));
    }
    if (computer === scissor && xChoice === rock) {
      setHumainResult((humainResult) => (humainResult += 1));
      setComputerResult(computerResult);
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "You win"));
    }
    if (computer === rock && xChoice === scissor) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "Computer win"));
    }
    if (computer === rock && xChoice === rock) {
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "Nobody"));
    }
    if (computer === scissor && xChoice === scissor) {
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "Nobody"));
      setHumainResult(humainResult);
      setComputerResult(computerResult);
    }
    if (computer === paper && xChoice === paper) {
      console.log(computerResult, humainResult);
      setPhrase((phrase) => (phrase = "Nobody"));
      setHumainResult(humainResult);
      setComputerResult(computerResult);
    }
    if (computerResult === 3 || humainResult === 3) {
      pointsSave.push({ computer: computerResult, humain: humainResult });
      setComputerResult(0);
      setHumainResult(0);
      console.log(pointsSave);
    }

    localStorage.setItem("points", JSON.stringify(pointsSave));

    return;
  }, [xChoice, computer]);

  const restart = () => {
    setComputerResult(0);
    setHumainResult(0);
  };

  const deleteHistory = () => {
    localStorage.setItem("points", JSON.stringify([]));
    setDeleted(1);
    setComputerResult(0);
    setHumainResult(0);
  };

  // const getHistory = JSON.parse(localStorage.getItem("points"));
  // console.log(getHistory[0]);
  // console.log(getHistory);

  return (
    <>
      <div className="top-row">
        <div>
          <h1>Rock Paper Scissors</h1>
        </div>
        <div className="second-row">
          <div>You</div>
          <div> Computer</div>
        </div>
        <div className="result-column">
          <div className="game-result"> {humainResult}</div>
          <span> vs </span>
          <div className="game-result"> {computerResult}</div>
        </div>
      </div>
      <div className="middle-row">
        {choice.map((choic, i) => (
          <Choice
            key={i}
            choic={choic}
            id={choic}
            letChoice={letChoice}
          ></Choice>
        ))}
      </div>
      <div className="game-row">
        <div>
          {clicked ? (
            <img className="img" src={xChoice} alt=""></img>
          ) : (
            <img className="img" src={what} alt=""></img>
          )}
        </div>
        <div>
          {clicked ? (
            <img className="img" src={computer} alt=""></img>
          ) : (
            <img className="img" src={what} alt=""></img>
          )}
        </div>
      </div>
      <div className="phrase-row">{phrase}</div>
      <button className="btn btn-restart" onClick={restart}>
        Restart
      </button>
      <div className="history-row">
        History
        {!deleted
          ? pointsSave.map((m, i) => (
              <div key={i}>
                {" "}
                <span>{i + 1}. </span>You {m.humain} : Robot {m.computer}
              </div>
            ))
          : null}
      </div>
      <button className="btn btn-red" onClick={deleteHistory}>
        Delete History
      </button>
    </>
  );
}
