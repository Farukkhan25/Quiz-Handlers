import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    // console.log(topic);
  return (
    <div className="card card-compact w-96 h-full  border-2 border-cyan-500 shadow-xl p-3 m-3">
      <figure>
        <img src={logo} alt="" className="bg-yellow-300" />
      </figure>
      <div className="card-body flex flex-col p-3 justify-around">
        <h2 className="card-title">{name}</h2>
        <p className="pb-3">Total: {total}</p>
        <Link
          to={`/topic/${id}`}
          className="inline-flex items-center justify-center w-full h-10 px-3 mb-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          <span className="mr-3">Start Quiz</span>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
