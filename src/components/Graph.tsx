import * as React from "react";
import { Line } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false, // Don't maintain width/height ratio
  layout: { padding: 20 },
  fullWidth: false,
  scales: {
    yAxes: [
      {
        id: "y-axis-1",
        type: "linear",
        position: "left"
      },
      {
        id: "y-axis-2",
        type: "linear",
        position: "right",
        gridLines: {
          display: false
        }
      }
    ]
  }
};

const Graph: React.FunctionComponent = () => {
  // TODO: Get data and labels as props
  const data = {
    labels: [
      "10/04/2018",
      "10/05/2018",
      "10/06/2018",
      "10/07/2018",
      "10/08/2018",
      "10/09/2018",
      "10/10/2018",
      "10/11/2018",
      "10/12/2018",
      "10/13/2018",
      "10/14/2018",
      "10/15/2018"
    ],
    datasets: [
      {
        label: "Cl2",
        yAxisID: "y-axis-1",
        data: [31, 21, 123, 123, 12, 65, 21, 12, 32, 41, 21, 54],
        fill: false, // Don't fill area under the line
        borderColor: "lightblue" // Line color
      },
      {
        label: "N03",
        yAxisID: "y-axis-2",
        data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19],
        fill: false, // Don't fill area under the line
        borderColor: "green" // Line color
      }
    ]
  };

  return (
    <div className="graph">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
