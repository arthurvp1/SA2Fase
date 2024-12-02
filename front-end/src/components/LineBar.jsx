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
          toolbar: {
            show: true, // Remove o menu do gráfico
            offsetY: 25,
            offsetX: 20,
          },
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        title: {
          text: "R$ 102.5M",
          align: "left",
          offsetY: 25,
          offsetX: 20,
          style: {
            fontSize: "20px", // Aumenta o tamanho do título
            color: "#23005B", // Altera a cor do título
            fontWeight: "bold", 
            fontFamily: "Poppins",
          },
        },
        subtitle: {
          text: "Receita Total",
          offsetY: 55,
          offsetX: 20,
          style: {
            fontSize: "16px", // Aumenta o tamanho do subtítulo
            color: "#5321CA", // Altera a cor do subtítulo
            fontWeight: "bold", 
            fontFamily: "Poppins"
          },
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
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
        xaxis: {
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          max: 100,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: -20,
        },
        colors: ['#4F3CC0', '#08D110'], // Adiciona as cores personalizadas aqui
      },
      series: [
        {
          name: "Ganhos",
          data: [60, 100, 80, 70, 60, 80, 50, 90, 40, 80, 90, 30],
        },
        {
          name: "Previsto",
          data: [50, 90, 40, 80, 90, 30, 70, 30, 60, 100, 80, 70],
        },
      ],
    };
  }

  render() {
    return (
      <div id="line-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={250}
          width={1000}
        />
      </div>
    );
  }
}

export default LineBar;
