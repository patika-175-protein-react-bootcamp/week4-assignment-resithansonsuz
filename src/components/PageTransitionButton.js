import "../App.css";
import React from "react";
import TransitionButtonIcon from "../constants/icons/TransitionButtonIcon";
import { Link } from "react-router-dom";

const PageTransitionButton = ({name}) => (
  <div className="TransitionButtons">
    <TransitionButtonIcon />
    <Link to="questionsPage">{name}</Link>
  </div>
);
export default PageTransitionButton;
