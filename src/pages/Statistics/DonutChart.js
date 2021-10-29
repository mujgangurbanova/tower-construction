import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { donutChartData } from "redux/actionCreators";

const DonutChart = () => {
  const Donut = useSelector((state) => state.donutChartDataReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/chart.json")
      .then((res) => dispatch(donutChartData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [options] = useState({
    series: Donut.donut,
    labels: Donut.label,
    tooltip: {
      y: {
        formatter: (val) => {
          return `$${val}`;
        },
      },
    },
    colors: ["#5E44A2", "#B6A4E5", "#E2DBF6"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: "55px",
          labels: {
            show: true,
            total: {
              show: true,
              fontSize: "12px",
              color: "#1E265E",
            },
          },
        },
      },
    },
  });
  const series = Donut.donut;

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      height={230}
      width="100%"
    ></Chart>
  );
};
export default DonutChart;
