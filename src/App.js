import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default class TimersDashboard extends React.Component {
	render() {
		return(
			<div className="max-w-sm mx-auto mt-8 border border-black border-solid rounded-lg">
				<h2 className="mx-auto mt-4 text-3xl max-w-max">Timers</h2>
				<TimerList />
				<ToggleableTimerForm isOpen={true}/>
			</div>
		)
	}
}

class TimerList extends React.Component {
	render() {
		return (
			<div>
				<EditTimer 
					title="Guitar"
					project="Music"
					elapsed="194856"
					runningSince="0000"
					editForOpen={false}
				/>	
				<EditTimer 
					title="Swimming"
					project="Olympic"
					elapsed="294856"
					runningSince="0054"
					editForOpen={false}
				/>	
			</div>
		);
	}
}

class ToggleableTimerForm extends React.Component {
	render() {
		if (this.props.isOpen) {
			return (
				<TimerForm />
			)
		} else {
			return (
				<a href="#"><AiOutlinePlus /></a>
			)
		}
	}
}
