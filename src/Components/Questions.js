import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

export const QuestionsContext = createContext([]);

const Questions = () => {
    const questionsData = useLoaderData([])
  const allQuestions = questionsData.data.questions;
  // const quizName = questionsData.data.name;
    console.log(allQuestions);
    return (
      <div className="flex flex-col items-center justify-between mt-28">
        
        {allQuestions.map((questions) => (
          <Question key={questions.id} questions={questions} />
        ))}
      </div>
    );
};

export default Questions;