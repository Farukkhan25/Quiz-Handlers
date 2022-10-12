import React from 'react';
import Options from './Options';

const Question = ({questions}) => {
   const { question,id } = questions;
  const options = questions.map(function (value, index){return index});
    return (
      <div className="flex flex-col items-center justify-between mt-28">
        <h1>Quiz of: {question}</h1>
        <div className="grid grid-col-1 lg:grid-cols-2">
          
              {/* {questions.map((options) => (
                <Options key={options.index} options={options} />
              ))} */}
          <p>{options}</p>
          </div>
        </div>
      
    );
};

export default Question;