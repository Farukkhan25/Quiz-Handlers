import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Questions = () => {
  const questionsData = useLoaderData();
  const allQuestions = questionsData.data.questions;
  const name = questionsData.data.name;

  return (
    <div className="flex flex-col items-center justify-between mt-28">
      <h2 className="bg-red-300 px-8 py-2 text-xl rounded-md border-emerald-100">
        This quiz is about <span>{name}</span>
      </h2>

      <div>
        {allQuestions.map((questions) => (
          <Question key={questions.id} questions={questions} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
