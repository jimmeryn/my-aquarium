import * as React from "react";
import { Line } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false, // Don't maintain width/height ratio
  layout: { padding: 20 },
  fullWidth: false,
  scales: {
    yAxes: [
      {
        id: "y-axis-0",
        type: "linear",
        position: "left"
      },
      {
        id: "y-axis-1",
        type: "linear",
        position: "right",
        gridLines: {
          display: false
        }
      }
    ]
  }
};

const Graph: React.FunctionComponent<{
  dates: string[];
  labels: string[];
  paramData: number[][];
}> = ({ dates, labels, paramData }) => {
  const colors = ["lightblue", "green"];
  const data = {
    labels: dates,
    datasets: paramData.reduce(
      (acc, currentDataArray, i) => [
        {
          label: labels[i],
          yAxisID: `y-axis-${i}`,
          data: currentDataArray,
          fill: false,
          borderColor: colors[i]
          // pointBorderColor: "red" // TODO: Add this as top or bot. Value over or under max
        },
        ...acc
      ],
      []
    )
  };

  return (
    <div className="graph">
      <Line data={data as unknown} options={options} />
    </div>
  );
};

export default Graph;
