import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './RadialBar.css';

const comissoes = 40  ;
const vendidos = 60;

class RadialBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'radialBar',
          height: 350,
          width: 380,
        },
        colors: ['#4F3CC0','#08D110'],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 5,
              size: '50%',
              background: 'transparent',
            },
            track: {
              show: false, // Remove a trilha de fundo
            },
          },
        },
        stroke: {
          lineCap: 'round', // Deixa as bordas arredondadas
        },
        series: [vendidos, comissoes],
        labels: [`Vendido ${vendidos}K`, `Comissão ${comissoes}K`],
        legend: {
          show: true,
          floating: true,
          position: 'left',
          offsetX: -30,
          offsetY: -20,
        },
      },
    };
  }

  render() {
    return (
      <div className="radial-bar">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="radialBar"
          height={250}
          className="radial-chart"
        />
      </div>
    );
  }
}

export default RadialBar;
