import React, { useContext } from "react";
import Lottie from "lottie-react";
import quiz from "../Assets/quiz.json";
import { QuizContext } from "./Root";
import Topic from "./Topic";
import { Link } from "react-router-dom";

const Topics = () => {
  const topics = useContext(QuizContext);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-24 ">
      <div className="flex flex-col items-center justify-between lg:flex-row ">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400">
                Be Brave!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              A brave person lives a <br className="hidden md:block" /> thousand
              lives{" "}
              <span className="inline-block text-blue-400">before he dies</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg text-justify hidden sm:block">
              There is nothing to fear of the exam. You just need to prepare
              yourself for the final test. To do so join us and justify your
              potential by giving these quiz and verify your strength and
              weakness. The student who afraid to sit for the quiz is no better
              than the losers who can’t.
            </p>
          </div>
          <div className="flex flex-col items-center  justify-end md:justify-end">
            <Link
              to="/blog"
              aria-label=""
              className="inline-flex items-center font-bold text-xl text-red-800 transition-colors duration-200 hover:text-blue-700 pr-5 pb-5"
            >
              Read Blogs
            </Link>
            <Link
              to="/Statistics"
              className="inline-flex items-center justify-center w-full h-12 px-32 py-6 mb-3 font-semibold tracking-wide text-3xl text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3">Statistics</span>
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 mb-24">
            <Lottie animationData={quiz} loop={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row mt-28">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
