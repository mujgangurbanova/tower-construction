import React, { Component } from "react";
import ReactChart from "react-apexcharts";
import "styles/App.scss";

class Area extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [110, 80, 140, 50, 170, 20, 190, 50, 200, 60, 210, 110],
        },
      ],

      options: {
        xaxis: {
          type: "category",
          categories: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avqust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr",
          ],
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

       
      },
    };
  }

  render() {
    return (
      <div className="area-chart">
          <ReactChart
            options={this.state.options}
            series={this.state.series}
            height={200}
            width={630}
            type="area"
          />
        </div>
     
    );
  }
}

export default Area;
