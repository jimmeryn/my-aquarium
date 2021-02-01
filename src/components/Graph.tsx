import * as React from "react";
import { Bar } from "react-chartjs-2";

const colors = ["#317B22", "#A74482 ", "#758BFD"];
const options = {
  maintainAspectRatio: false,
  layout: { padding: 20 },
  fullWidth: false,
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-param-1",
        labels: {
          show: true,
        },
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-param-2",
        labels: {
          show: true,
        },
      },
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-refills",
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
    ],
  },
};

const Graph: React.FunctionComponent<{
  dates: string[];
  labels: string[];
  paramData: number[][];
  refills?: number[];
}> = ({ dates, labels, paramData, refills }) => {
  const data = {
    labels: dates,
    datasets: paramData.reduce(
      (acc, currentDataArray, i) => [
        {
          label: labels[i],
          type: "line",
          data: currentDataArray,
          fill: false,
          borderColor: colors[i],
          backgroundColor: colors[i],
          pointBorderColor: colors[i],
          pointBackgroundColor: colors[i],
          pointHoverBackgroundColor: colors[i],
          pointHoverBorderColor: colors[i],
          yAxisID: `y-axis-param-${i + 1}`,
        },
        ...acc,
      ],
      refills
        ? [
            {
              type: "bar",
              label: "Refills",
              data: refills,
              fill: false,
              backgroundColor: colors[2],
              borderColor: colors[2],
              hoverBackgroundColor: colors[2],
              hoverBorderColor: colors[2],
              yAxisID: "y-axis-refills",
            },
          ]
        : []
    ),
  };

  return (
    <div className="graph">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
