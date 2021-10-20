import React from "react";
import { Doughnut } from "react-chartjs-2";



const data = {
  labels: ["Kredit", "Ipoteka", "Satilib"],
  datasets: [
    {
      data: [2302, 1132, 1090],
      backgroundColor: ["#5E44A2", "#B6A4E5", "#E2DBF6"],
      borderColor: ["#5E44A2", "#B6A4E5", "#E2DBF6"],
      label: ["Kredit", "Ipoteka", "Satilib"],
      labelSuffix: "$",
      pointStyle: "circle",
    },
  ],
};


const DonutChart = () => (
    <div className="chartContainer">
      <Doughnut data={data }  height={120} width={120} />
      <div  className="chartInner">
        <div className="chartTarget">$1,200</div>
        <span className="chartDaysLabel">Ümumi</span>
      </div>
    </div>
);

export default DonutChart;
