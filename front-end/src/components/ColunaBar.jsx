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
            show: false, // Remove o menu do gráfico
          },
        },
        xaxis: {
          categories: ['Arthur', 'Giovani', 'Carlos', 'Luiz Felipe', 'Joabe', 'Pedro'],

        },
        yaxis: {
          max: 100
        },
        plotOptions: {
          bar: {
            borderRadius: 4, // Bordas arredondadas
            columnWidth: "50%", // Ajusta a largura das colunas
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            gradientToColors: ["#A084DC"], // Cor final
            stops: [0, 100],
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60],
        },
      ],
    };
  }

  render() {
    return (
      <div className="coluna-bar">
        <div className="chart-container">
          <h2 className="h2-colunaBar">Ação dos Vendedores</h2>
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
