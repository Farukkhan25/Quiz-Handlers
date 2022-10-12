import React from 'react';

const Options = ({ option, correctAnswer }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="checkbox" className="checkbox checkbox-primary" />
        <span className="label-text">{option}</span>
      </label>
    </div>
  );
};

export default Options;