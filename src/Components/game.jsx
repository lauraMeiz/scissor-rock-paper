import scissor from "../images/scissor.jpg";
import rock from "../images/rock.jpg";
import paper from "../images/paper.jpg";

import { useState } from "react";
import Choice from "./Choice";
export default function Game() {
  const [choice, setChoice] = useState([scissor, rock, paper]);
  const [xChoice, setXchoice] = useState([]);
  const [computer, setComputer] = useState([]);
  const [humainResult, setHumainResult] = useState(0);
  const [computerResult, setComputerResult] = useState(0);

  const letChoice = (choic) => {
    setXchoice(choic);

    computerChoice();
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
  };

  // const points = () => {
  //   let sum = 0;
  //   let move = 0;
  //   if (computer === paper && xChoice === scissor) {
  //     move++;
  //     sum += move;
  //   }
  //   setResult(sum);
  //   console.log(result);
  // };

  // console.log(xChoice === paper);
  // console.log(computer === xChoice);
  // console.log(xChoice);
  // console.log(move);

  return (
    <>
      <div className="top-row">
        <div>
          <h1>Rock Paper Scissors</h1>
        </div>
      </div>
      <div className="middle-row">
        <div className="left-column">
          {choice.map((choic, i) => (
            <Choice
              key={i}
              choic={choic}
              id={choic}
              letChoice={letChoice}
            ></Choice>
          ))}
        </div>

        <div className="right-column">
          <div className="game-result">{humainResult}</div>
          <div className="game-result">{computerResult}</div>
        </div>
      </div>

      <div className="game-row">
        <div>
          pasirinkimas<img src={xChoice} alt={xChoice}></img>
        </div>
        <div>
          kompas<img src={computer} alt={computer}></img>
        </div>
      </div>
      {/* <div className="bottom-row">
        <div>Result</div>
        <div className="game-result"></div>
      </div> */}
    </>
  );
}
