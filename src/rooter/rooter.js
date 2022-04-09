import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/startPage";
import QuestionsPage from "../pages/questionsPage";
import ConslusionPage from "../pages/conclusionPage";

function Router() {
  return (
    //I transferred the pages I created to the page.
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="questionsPage" element={<QuestionsPage />} />
        <Route path="conclusionPage" element={<ConslusionPage />} />
    </Routes>
  );
}

export default Router;
