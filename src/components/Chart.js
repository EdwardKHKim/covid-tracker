import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			covidData: {
				labels: ['Febrary', 'March', 'April', 'May', 'June', 'July', 'August'],
				datasets: [{
					label: 'Confirmed Covid-19 Cases (Total)',
					data: [
						20,
						8581,
						53242,
						90955,
						104204,
						116312,
						128948
					],
					backgroundColor: ['rgba(0, 0, 0, 0)'],
					borderColor: ['rgba(234, 83, 116, 1)'],
					lineTension: [0.5],
					pointRadius: [0],
					pointHitRadius: [0],
					pointBackgroundColor: ['rgba(0, 0, 0, 0)']
				}
				]
			}
		}
	}

	render() {
		return (
			<div className="chart">
				<Line
					data={this.state.covidData}
					options={{
						maintainAspectRatio: false, scales: {
							xAxes: [{
								gridLines: {
									drawBorder: true,
									lineWidth: 0
								}

							}],
							yAxes: [{
								gridLines: {
									drawBorder: true,
									lineWidth: 0
								}
							}]
						}
					}}
				/>
			</div>
		)
	}
}

export default Chart;

