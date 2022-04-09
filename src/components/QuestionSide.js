import "../App.css";
import React from "react";
import QuestionsSideIcon from "../constants/icons/questionsSideIcon";

const QuestionsSide = ({ask}) => (
  <div className="QuestionSide">
    <QuestionsSideIcon />
    <span className="questionsPage">{ask}</span>
  </div>
  
);
export default QuestionsSide;
