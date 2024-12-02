import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./ColunaBar.css";

class ColunaBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: true, // Remove o menu do gráfico
            offsetY: -30,
            offsetX: 10,
          },
        },
        xaxis: {
          categories: ['Arthur', 'Giovani', 'Carlos', 'Luiz Felipe', 'Joabe', 'Pedro'],

        },
        yaxis: {
          max: 10
        },
        plotOptions: {
          bar: {
            borderRadius: 4, // Bordas arredondadas
            columnWidth: "50%", // Ajusta a largura das colunas
          },
        },
        fill: {
          colors: ['#4F3CC0'],
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            gradientToColors: ['#08D110'], // Cor final
            stops: [0, 100],
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [3, 4, 4, 5, 4, 6],
        },
      ],
    };
  }

  render() {
    return (
      <div className="coluna-bar">
        <div className="chart-container">
          <h2 className="h2-colunaBar"><b>Venda dos Funcionários</b></h2>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
}

export default ColunaBar;
