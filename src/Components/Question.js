import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from './Options';

const Question = ({questions}) => {
  const { question, correctAnswer, options } = questions; 
  
// console.log(options);
    return (
      <div className="flex flex-col items-center justify-between mt-28">
        <div>
          <div>
            <h2 className='text-center me-5'>{question}</h2>
            
          </div>
        </div>
        
        
        <div className="grid grid-col-1 lg:grid-cols-2">
          {options.map((option, index) => (
            <Options
              key={index}
              option={option}
              correctAnswer={correctAnswer}
            />
          ))}
          
        </div>
      </div>
    );
};

export default Question;