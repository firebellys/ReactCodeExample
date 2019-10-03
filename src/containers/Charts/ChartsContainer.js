import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { connect } from "react-redux";

export class ChartContainer extends Component {
  render() {
    return (
      <div className="ChartArea">
        <h1>Chart Area</h1>
        <button onClick={this.props.onChangeChartType}>Change Chart</button>
        <LineChart
          width={600}
          height={300}
          data={this.props.localData}
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
  }
}

// Validate prop types
ChartContainer.propTypes = {
  localData: PropTypes.object,
  onChangeChartType: PropTypes.func
};

const mapStateToProps = state => {
  return {
    chartType: state.chartType,
    localData: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeChartType: () => dispatch({ type: "CHANGE_CHART" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartContainer);
