import React, { useContext } from 'react';
import { QuestionsContext } from './Questions';

const Question = ({questions}) => {
   const { question,id } = questions;
   
    return (
      <div className="flex flex-col items-center justify-between lg:flex-row mt-28">
        <h1>Question: {question}</h1>
      </div>
    );
};

export default Question;