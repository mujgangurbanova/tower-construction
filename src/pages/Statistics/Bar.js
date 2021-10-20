import React, { Component } from "react";
import Chart from "react-apexcharts";
import "styles/App.scss";

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

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [600, 550, 450, 350, 250, 200, 150],
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
          categories: ["B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş.", "B."],
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
          labels:{
            show:false,
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
    };
  }

  render() {
    return (
      <div className="chart-wrapper">
        <div id="chart">
          <Title />
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width={240}
            height={190}
          />
        </div>
      </div>
    );
  }
}

export default Bar;
