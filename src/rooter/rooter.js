import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/startPage";
import QuestionsPage from "../pages/questionsPage";
import ConslusionPage from "../pages/conclusionPage";

function Router() {
  return (
    //The created page components are transferred to the router.
    
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="questionsPage" element={<QuestionsPage />} />
<<<<<<< HEAD
      <Route path="conclusionPage" element={<ConslusionPage />} />
=======
        <Route path="conclusionPage" element={<ConslusionPage />} />
>>>>>>> 8311e831302bb47c9b4c1bc483df6ac2583b9331
    </Routes>
  );
}

export default Router;
