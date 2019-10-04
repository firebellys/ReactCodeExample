import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { useSelector, useDispatch } from "react-redux";

const Chart = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  return (
    <div className="ChartArea">
      <h1>Chart Area</h1>
      <button onClick={() => dispatch({ type: "CHANGE_CHART" })}>
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
