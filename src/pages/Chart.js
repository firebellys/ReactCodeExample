import React, { useState } from "react";
import produce from "immer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const largeRandom = (start, range) => start + Math.random() * range;

const generateData = data =>
  data.map(
    produce(page => {
      page.uv = largeRandom(1000, 3000);
      page.pv = largeRandom(1000, 8000);
      page.amt = largeRandom(2000, 300);
    })
  );

const Chart = () => {
  const [data, setData] = useState([
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
  ]);

  return (
    <div className="ChartArea">
      <h1>Chart Area</h1>
      <button onClick={() => setData(prevData => generateData(prevData))}>
        Change Chart
      </button>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;
