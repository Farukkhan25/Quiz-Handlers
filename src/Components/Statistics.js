import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [totals, setTotals] = useState([]);
  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const topicsLoaded = data.data.data;
      const topics = topicsLoaded.map((topic) => {
        const topicsInfo = {
          name: topic.name,
          total: topic.total,
        };
        return topicsInfo;
      });
      setTotals(topics);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-20 text-xl">
      <BarChart width={450} height={400} data={totals}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;
