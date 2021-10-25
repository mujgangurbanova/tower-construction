import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { barChartData } from "redux/actionCreators";

function Title() {
  return (
    <div className="title">
      <h1>Keçən həftə</h1>
      <a href="#!">Kredit</a>
      <a href="#!">İpoteka</a>
      <a href="#!">Satılıb</a>
    </div>
  );
}

const Bar = () => {
  const BarChart = useSelector((state) => state.barChartDataReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/chart.json")
      .then((res) => dispatch(barChartData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [options] = useState({
    series: [
      {
        data: BarChart.bar,
      },
    ],

    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "95%",
        },
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: BarChart.labels,
        lines: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },

        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },

      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  });

  return (
    <div className="chart-wrapper">
      <div id="chart">
        <Title />
        <Chart
          options={options.options}
          series={options.series}
          type="bar"
          width={240}
          height={190}
        />
      </div>
    </div>
  );
};

export default Bar;
