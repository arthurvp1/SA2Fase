import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./LineBar.css";

class LineBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 328,
          type: "line",
          zoom: {
            enabled: false,
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 1,
          },
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        title: {
          text: "Receita Total",
          align: "left",
          offsetY: 25,
          offsetX: 20,
        },
        subtitle: {
          text: "Statistics",
          offsetY: 55,
          offsetX: 20,
        },
        markers: {
          size: 6,
          strokeWidth: 0,
          hover: {
            size: 9,
          },
        },
        grid: {
          show: true,
          padding: {
            bottom: 0,
          },
        },
        labels: [
          " ",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
        ],
        xaxis: {
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
            max: 100 
          },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: -20,
        },
      },
      series: [
        {
          name: "Ganhos",
          data: [90, 100, 80, 20, 33, 27, 53],
        },
        {
          name: "Previsto",
          data: [50, 33, 40 , 42, 19, 32, 40],
        },
      ],
    };
  }

  render() {
    return (
      <div id="line-chart">
        <h2>R$ 102.5M</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
          width={500}
        />
      </div>
    );
  }
}

export default LineBar;
