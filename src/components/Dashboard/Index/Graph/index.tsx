import "./graph.scss";
import { FunctionComponent } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  defaults,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  specialColors,
  lightTheme,
  nightTheme,
} from "../../../../data/constants";
import { GraphType } from "../../../../types";

const Graph: FunctionComponent<GraphType> = ({ isNightMode }) => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

  defaults.font.size = 14;
  defaults.font.family = "Nunito, Roboto, sans-serif";

  defaults.color = isNightMode ? nightTheme.fontColor : lightTheme.fontColor;

  defaults.borderColor = isNightMode
    ? nightTheme.graph.gridColor
    : lightTheme.graph.gridColor;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: {
          display: true,
          text: "Net Revenue",
        },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        title: {
          display: true,
          text: "Number of Sales",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]; // fake data labels

  const data = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "Revenue",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })), // fake data values
        backgroundColor: specialColors.aqua.background,
        borderColor: specialColors.aqua.font,
        borderWidth: 2,
        yAxisID: "y",
      },
      {
        type: "line" as const,
        label: "Sales",
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })), // fake data values
        backgroundColor: specialColors.blue.font,
        borderColor: specialColors.blue.background,
        borderWidth: 4,
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="graph">
      <div className="graph__wrapper">
        <h3 className="graph__header">Sales Analytics</h3>
        <div className="graph__container">
          <Chart
            className="graph__canvas"
            type="bar"
            options={options}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
