import React, { useContext } from 'react';
import { QuizContext } from './Root';
import Statisticsbar from './Statisticsbar';

const Statistics = () => {
    const topics = useContext(QuizContext);
    // const total = topics.total;
  console.log(topics);
    return (
      <div className="flex flex-col items-center justify-between lg:flex-row mt-28">
        {topics.map((topic) => (
          <Statisticsbar key={topic.id} topic={topic} />
        ))}
      </div>
    );
};

export default Statistics;