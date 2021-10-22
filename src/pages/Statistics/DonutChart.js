import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
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
    data: {
      labels: Donut.label,
      datasets: [
        {
          data: Donut.donut,
          backgroundColor: ["#5E44A2", "#B6A4E5", "#E2DBF6"],
          borderColor: ["#5E44A2", "#B6A4E5", "#E2DBF6"],
          label: Donut.label,
          labelSuffix: "$",
          pointStyle: "circle",
        },
      ],
    },
  });

  return (
    <div className="chartContainer">
      <Doughnut data={options.data} height={120} width={120} />
      <div className="chartInner">
        <div className="chartTarget">$1,200</div>
        <span className="chartDaysLabel">Ümumi</span>
      </div>
    </div>
  );
};
export default DonutChart;
