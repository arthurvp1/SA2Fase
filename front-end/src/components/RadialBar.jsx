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
              size: '48%',
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
          position: 'right',
          offsetX: -40,
          offsetY: 230,
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
          height={350}
          
        />
      </div>
    );
  }
}

export default RadialBar;
