import React, { Component } from "react";
import Chart from "react-apexcharts";


class GraficoBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false // Remove o menu do gráfico
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true, // Garantir que a barra seja horizontal
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 100,
                  color: '#80FF00' // Cor verde para a barra
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: true // Desativa os rótulos de dados na barra
        },
        xaxis: {
          max: 100  // Define o valor máximo do eixo x
        },
        yaxis: {
          show: false // Oculta o eixo y e seus rótulos
        }
      },
      series: [
        {
          data: [props.meta] // Define o valor da barra
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              HEAD
              width="95%" // Define a largura do gráfico
              height="100" // Define a altura do gráfico
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GraficoBar;
