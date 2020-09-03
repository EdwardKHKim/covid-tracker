import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			covidData: {
				labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
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
						maintainAspectRatio: false, 
						elements: {
							point: {
								radius: 0
							}
						}, 
						title: {
							display: true, 
							text: '📈 Confirmed Covid-19 Cases in Canada', 
							fontFamily: "circular-std-book, Arial, sans-serif", 
							fontColor: '#FFFFFF', 
							fontSize: '12', 
							padding: 20, 
						}, 
						legend: {
							display: false 
						}, 
						scales: {
							xAxes: [{
								ticks: {
									fontColor: '#b2b4b7',
									fontFamily: "circular-std-book, Arial, sans-serif",
								}, 
								gridLines: {
									drawBorder: true,
									lineWidth: 0,
									zeroLineColor: '#262c38'
								}

							}],
							yAxes: [{
								ticks: {
									fontColor: '#b2b4b7',
									fontFamily: "circular-std-book, Arial, sans-serif",
								}, 
								gridLines: {
									drawBorder: true,
									lineWidth: 0,
									zeroLineColor: '#262c38'
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

