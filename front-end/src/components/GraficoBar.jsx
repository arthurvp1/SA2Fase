import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraficoBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false // Remove o menu do gráfico
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
            horizontal: true, // Garantir que a barra seja horizontal
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 200,
                  color: "#80FF00" // Cor verde para a barra
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false // Desativa os rótulos de dados na barra
        },
        xaxis: {
          max: 200, // Define o valor máximo do eixo x
          labels: {
            formatter: function (value) {
              return `${value}k`; // Adiciona o sufixo "k" aos valores
            }
          }
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
      <div className="grafico-bar">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="98%" // Define a largura do gráfico
              height="100" // Define a altura do gráfico
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GraficoBar;
