import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const QuizContext = createContext([]);

const Root = () => {
  const quizData = useLoaderData();
  const quiz = quizData.data;
  return (
    <div>
      <QuizContext.Provider value={quiz}>
        <Header />
        <Outlet />
        <Footer />
      </QuizContext.Provider>
    </div>
  );
};

export default Root;
