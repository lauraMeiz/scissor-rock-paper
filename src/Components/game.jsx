import scissor from "../images/scissor.jpg";
import rock from "../images/rock.jpg";
import paper from "../images/paper.jpg";
import what from "../images/what.jpg";
import { useState } from "react";
import Choice from "./Choice";
export default function Game() {
  const [choice, setChoice] = useState([scissor, rock, paper]);
  const [xChoice, setXchoice] = useState([]);
  const [computer, setComputer] = useState([]);
  const [humainResult, setHumainResult] = useState(0);
  const [computerResult, setComputerResult] = useState(0);
  const [clicked, setClicked] = useState(0);

  const letChoice = (choic) => {
    setXchoice(choic);

    computerChoice();
    setClicked(1);
  };
  const computerChoice = (i) => {
    const randomNumber = Math.floor(Math.random() * 3);
    //  return randomNumber
    const comp = choice[randomNumber];

    setComputer(comp);

    if (computer === paper && xChoice === scissor) {
      setHumainResult((humainResult) => (humainResult += 1));
      setComputerResult(computerResult);
    }
    if (computer === scissor && xChoice === paper) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
    }
    if (computer === paper && xChoice === rock) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
    }
    if (computer === rock && xChoice === paper) {
      setHumainResult((computerResult) => (computerResult += 1));
      setComputerResult(computerResult);
    }
    if (computer === scissor && xChoice === rock) {
      setHumainResult((humainResult) => (humainResult += 1));
      setComputerResult(computerResult);
    }
    if (computer === rock && xChoice === scissor) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
    }
    // if (computer === scissor && xChoice === paper) {
    //   setHumainResult(humainResult);
    //   setComputerResult((computerResult) => (computerResult += 1));
    // }
  };

  return (
    <>
      <div className="top-row">
        <div>
          <h1>Rock Paper Scissors</h1>
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
    </>
  );
}
