/* eslint-disable default-case */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import "../App.css";
import Detail from "../components/Detail";
import AnswerButton from "../components/OptionsButton";
/* import QuestionsSideIcon from "../constants/icons/questionsSideIcon"; */
import { useState } from "react";
import QuestionsSide from "../components/QuestionSide";


function QuestionsPage() {
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
/* const [questions, setQuestions] = useState([]); */
 

/* const randomMultiplication = (data) => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const Ask = num1 * num2;
}; */


  const backgroundColor = (id) => {
  
    let element = document.querySelector("body");
    element.style.background = "red";
    /* if(){

    }else{

    } */
    
    



    switch (id) {
    case (id = 1):
      setColor1("black");
      break;

    case (id = 2):
      setColor2("black");
      break;

    case (id = 3):
      setColor3("black");
      break;
    }
  };

  return (
    <div className="questionsPage">
      <div className="left">
        <div className="actionIcon">
          <QuestionsSide ask={"7 x 8"}/>
        </div>

        
      </div>

      <div className="right">
        <div className="right-top">
          <div className="instructions">
            <div className="info">
              <Detail contents="Score: 120" />
            </div>
            <div className="info">
              <Detail contents="Tour: 2" />
            </div>
            <div className="info">
              <Detail contents="Questions: 6/7" />
            </div>
          </div>
        </div>

        <div className="answer">
          <div>
            <AnswerButton
              answer="49"
              num="1"
              color={color1}
              onClick={() => backgroundColor(1)}
            />
          </div>

          <div>
            <AnswerButton
              answer="64"
              num="2"
              color={color2}
              onClick={() => backgroundColor(2)}
            />
          </div>

          <div>
            <AnswerButton
              answer="56"
              num="3"
              color={color3}
              onClick={() => backgroundColor(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuestionsPage;
