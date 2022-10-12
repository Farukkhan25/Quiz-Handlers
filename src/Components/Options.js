import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {

  const handleAnswer = () => {
    if (option === correctAnswer) {
      toast.success("Well done! You chose correct answer.", {position:toast.POSITION.TOP_CENTER})
    }
    else {
      toast.error("Oops! You chose wrong answer.", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }
  return (
    <div>
      <div className={`form-control`}>
        <label className="label cursor-pointer p-5">
          <input type="checkbox" className={`form-check-input`} id="flexRadioDefault" onClick={handleAnswer}/>
          <span className="label-text pl-1">{option}</span>
        </label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Options;