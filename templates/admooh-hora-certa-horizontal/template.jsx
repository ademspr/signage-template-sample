import React from 'react';

const daysOfWeek = [
	"Domingo",
	"Segunda",
	"Terça",
	"Quarta",
	"Quinta",
	"Sexta",
	"Sábado"
];

export default class AdMoohHoraCerta extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date()
		}
	}
	render() {
	
		const hour = this.state.date.getHours();
		const minute = this.state.date.getMinutes();
		const day = daysOfWeek[this.state.date.getDay()];
		const date = this.state.date.getDate();
		const month = this.state.date.getMonth() + 1;
		return (
			<div style={{background: "#fff"}}>
					<h2>
						{("0" + hour).slice(-2)}h{("0" + minute).slice(-2)}
					</h2>
					<h3>
						{day},  {("0" + date).slice(-2)}/{("0" + month).slice(-2)}
					</h3>
			</div>
		);
	}
}