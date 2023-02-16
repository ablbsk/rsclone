import "./graph.scss";
import { FunctionComponent, useEffect, useState } from "react";
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
import {
  specialColors,
  lightTheme,
  nightTheme,
} from "../../../../data/constants";
import { GraphType } from "../../../../types";
import moment from "moment";
import { IOrder, IOrderForGraph } from "../../../../interfaces/order";

const Graph: FunctionComponent<GraphType> = ({ isNightMode, orders }) => {
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

  // ------------------------------------------------------------------------

  const [value, setValues] = useState<IOrderForGraph[]>([
    { label: "1", price: 0, count: 0 },
  ]);

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

  const prepareData = (period: string) => {
    const result = [];
    const format = period === "quarter" ? "MM-YYYY" : "DD-MM";
    const granularity = period === "quarter" ? "month" : "day";
    let ii = 3;

    if (period !== "quarter") {
      ii = period === "week" ? 7 : moment().date();
    }

    const obj =
      period === "quarter"
        ? orders
        : orders.filter(
            (order: IOrder) =>
              moment(order.date).quarter() === moment().quarter()
          );

    for (let i = 0; i < ii; i++) {
      const item = moment().subtract(i, granularity);

      const price = obj.reduce((res, order: IOrder) => {
        return moment(order.date).isSame(item, granularity) ? res + order.price : res;
      }, 0 as number);

      const count = obj.reduce((res, order: IOrder) => {
        return moment(order.date).isSame(item, granularity) ? res + 1 : res;
      }, 0 as number);

      result.push({
        label: item.format(format),
        price: price,
        count: count,
      });
    }

    return result.reverse();
  };

  useEffect(() => setValues(prepareData("week")), [orders]);

  const data = {
    labels: value.map((item) => item.label),
    datasets: [
      {
        type: "bar" as const,
        label: "Revenue",
        data: value.map((item) => item.price),
        backgroundColor: specialColors.aqua.background,
        borderColor: specialColors.aqua.font,
        borderWidth: 2,
        yAxisID: "y",
      },
      {
        type: "line" as const,
        label: "Sales",
        fill: false,
        data: value.map((item) => item.count),
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
        <div className="graph__head">
          <h3 className="graph__header">Sales Analytics</h3>
          <div>
            <button onClick={() => setValues(prepareData("week"))}>Week</button>
            <button onClick={() => setValues(prepareData("month"))}>
              Month
            </button>
            <button onClick={() => setValues(prepareData("quarter"))}>
              Quarter
            </button>
          </div>
        </div>
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
