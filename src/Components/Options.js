import React from 'react';

const Options = ({ options }) => {
    return (
      <div className="form-control">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="label-text">{options}</span>
        </label>
      </div>
    );
};

export default Options;