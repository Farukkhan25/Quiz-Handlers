import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Options = ({ option, correctAnswer }) => {
  const handleAnswer = () => {
    if (option === correctAnswer) {
      toast.success("Well done! You chose correct answer.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Oops! You chose wrong answer.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div>
      <div className={"form-check"}>
        <input
          type="radio"
          className={"form-check-input"}
          name="flexRadio"
          id="flexRadioDefault"
          onClick={handleAnswer}
        />
        <label className="form-check-lebel p-5" htmlFor="flexRadioDefault1">
          <span className="label-text pl-1">{option}</span>
        </label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Options;
