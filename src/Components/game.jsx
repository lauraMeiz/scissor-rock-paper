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

  const letChoice = (choic) => {
    setXchoice(choic);

    computerChoice();
    checkWinner();
    setClicked(1);
  };

  const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    const comp = choice[randomNumber];

    setComputer(comp);
  };

  const checkWinner = () => {
    if (computer === paper && xChoice === scissor) {
      setHumainResult((humainResult) => (humainResult += 1));
      setComputerResult(computerResult);
      setPhrase((phrase) => (phrase = "You win"));
    }
    if (computer === scissor && xChoice === paper) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
      setPhrase((phrase) => (phrase = "Computer win"));
    }
    if (computer === paper && xChoice === rock) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
      setPhrase((phrase) => (phrase = "Computer win"));
    }
    if (computer === rock && xChoice === paper) {
      setHumainResult((humainResult) => (humainResult += 1));
      setComputerResult(computerResult);
      setPhrase((phrase) => (phrase = "You win"));
    }
    if (computer === scissor && xChoice === rock) {
      setHumainResult((humainResult) => (humainResult += 1));
      setComputerResult(computerResult);
      setPhrase((phrase) => (phrase = "You win"));
    }
    if (computer === rock && xChoice === scissor) {
      setHumainResult(humainResult);
      setComputerResult((computerResult) => (computerResult += 1));
      setPhrase((phrase) => (phrase = "Computer win"));
    }
    if (computer === rock && xChoice === rock) {
      setPhrase((phrase) => (phrase = "Nobody"));
    }
    if (computer === scissor && xChoice === scissor) {
      setPhrase((phrase) => (phrase = "Nobody"));
    }
    if (computer === paper && xChoice === paper) {
      setPhrase((phrase) => (phrase = "Nobody"));
    }
    return;
  };
  useEffect(() => {
    checkWinner();
  }, [xChoice, computer]);

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
      <div>{phrase}</div>
    </>
  );
}
