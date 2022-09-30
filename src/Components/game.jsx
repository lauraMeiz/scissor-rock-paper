import scissor from "../images/scissor.jpg";
import rock from "../images/rock.jpg";
import paper from "../images/paper.jpg";

import { useState } from "react";
import Choice from "./Choice";
export default function Game() {
  const [choice, setChoice] = useState([scissor, rock, paper]);
  const [xChoice, setXchoice] = useState([]);
  const [computer, setComputer] = useState([]);
  const letChoice = (choic) => {
    setXchoice(choic);
    console.log(choic);
    computerChoice();
  };
  const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    //  return randomNumber
    const comp = choice[randomNumber];
    console.log(choice[randomNumber]);
    setComputer(comp);
    console.log(computer);
  };

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

        <div className="right-column"></div>
      </div>
      <div>
        pasirinkimas<img src={xChoice} alt={xChoice}></img>
      </div>
      <div>
        kompas<img src={computer} alt={computer}></img>
      </div>
      <div className="bottom-row">
        <div>Result</div>
        <div className="game-result"></div>
      </div>
    </>
  );
}
