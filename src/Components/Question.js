import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import Options from './Options';

const Question = ({questions}) => {
  const { question, correctAnswer, options } = questions; 
  const questionsString = question.replace(/(<([^>]+)>)/ig, '');
  const eachQuestion = questionsString.replaceAll('&nbsp;', '');

  const showAnswer = () => {
    toast.info(`The Correct Answer is : ${correctAnswer}`,
      { position: toast.POSITION.TOP_CENTER },{autoClose: 2000});
  }


    return (
      <div className="flex flex-col items-center justify-between mt-20 border-2 border-indigo-500 drop-shadow-lg p-6 bg-yellow-300 text-lg font-bold">
        <div className="">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-center me-5 pr-5">{eachQuestion}</h2>
            <p onClick={showAnswer} className="fill-current text-red-700">
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </p>
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