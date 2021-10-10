import React, { Component } from "react";
import Chart from "react-apexcharts";
import "styles/App.scss";
class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [2100, 1500, 900, 700, 800, 500, 100],
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
          style: {},
        },
        xaxis: {
          categories: ["B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş.", "B."],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={600}
          height={250}
        />
      </div>
    );
  }
}

export default Bar;
