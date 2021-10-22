import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { areaChartData } from "redux/actionCreators";
import "styles/App.scss";

const Area = () => {

  const AreaChart = useSelector((state) => state.areaChartDataReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/chart.json")
      .then((res) => dispatch(areaChartData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  const [options] = useState({
    series: [
      {
        data: AreaChart.a,
      },
    ], 
    
    options :{
     xaxis: {
       type: "category",
       categories: AreaChart.b,
       tooltip: {
         enabled: false,
       },
  
       labels: {
         show: true,
         trim: false,
       },
       axisTicks: {
         show: false,
       },
       axisBorder: {
         show: false,
       },
     },
     grid: {
       show: true,
       borderColor: " #F2F3F3",
       strokeDashArray: 15,
     },
     chart: {
       toolbar: {
         show: false,
       },
       foreColor: "#ABAEAF",
     },
     dataLabels: {
       enabled: false,
     },
     colors: ["#5E44A2"],
     stroke: {
       curve: "smooth",
       width: 4,
       show: true,
       dashArray: 0,
     },
     fill: {
       type: "gradient",
       gradient: {
         inverseColors: false,
         opacityTo: [0, 0.1],
         stops: [0, 100, 100],
       },
     },
  
     responsive: [
       {
         breakpoint: 550,
         options: {
           legend: {
             position: "bottom",
             horizontalAlign: "center",
             offsetY: 5,
           },
         },
       },
     ],
   }
  })
  
  
  
  


  return (
    <div className="area-chart">
      <ReactChart
        options={options.options}
        series={options.series}
        height={200}
        width={630}
        type="area"
      />
    </div>
  );
};

export default Area;
