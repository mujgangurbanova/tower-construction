import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { areaChartData } from "redux/actionCreators";
function Titles({ selection, setSelection, updateData }) {
  return (
    <div className="sales">
      <span>Satışlar</span>
      <div className="area-chart-title">
        <button id="all" onClick={() => updateData("all")} className={selection === "all" ? "active-area" : ""}>
          Son 12 ay
        </button>
        <button id="six_months" onClick={() => updateData("six_months")} className={selection === "six_months" ? "active-area" : ""}>
          Son 8 həftə
        </button>
        <button id="one-month" onClick={() => updateData("one_month")} className={selection === "one_month" ? "active-area" : ""}>
          Aylıq
        </button>
        <button id="one-year" onClick={() => updateData("one_year")} className={selection === "one_year" ? "active-area" : ""}>
          2013
        </button>
      </div>
    </div>
  );
}

function Area() {
  const [selection, setSelection] = useState();
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
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 200,
        foreColor: "#ABAEAF",

        zoom: {
          autoScaleYaxis: true,
        },

        toolbar: {
          show: false,
        },
      },
      annotations: {
        xaxis: [
          {
            x: new Date("14 Nov 2021").getTime(),
          },
        ],
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

      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
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
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
    },
    selection: "one_year",
  });

  const updateData = (timeline) => {
    setSelection(timeline);

    switch (timeline) {
      case "six_months":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Aug 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "one_year":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Feb 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;

      case "all":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("23 Jan 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "one_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("28 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      default:
    }
  };

  return (
    <>
      <Titles
        selection={selection}
        setSelection={selection}
        updateData={updateData}
      />
      <div className="area-chart">
        <ReactApexChart
          options={options.options}
          series={options.series}
          type="area"
          height={200}
          width={630}
        />
      </div>
    </>
  );
}

export default Area;
