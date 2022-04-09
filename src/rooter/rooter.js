import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/startPage";
import QuestionsPage from "../pages/questionsPage";

function Router() {
  return (
    //I transferred the pages I created to the page.
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="questionsPage" element={<QuestionsPage />} />
    </Routes>
  );
}

export default Router;
