import "../App.css";
import React from "react";
import AnswerButtonIcon from "../constants/icons/AnswerButtonIcon";


const AnswerButton = ({answer,num,color,onClick}) => (
  <div className={"AnswerButtons answer"+ num}>
    <AnswerButtonIcon color= {color} />
    <span onClick={onClick}>{answer}</span>
  </div>
);
export default AnswerButton;