import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import convertToHr from "./helper";

export default class TimersDashboard extends React.Component {
	render() {
		return(
			<div className="max-w-sm mx-auto mt-8 font-serif">
				<h2 className="mx-auto my-5 text-3xl font-medium max-w-max after:content-[''] after:w-72 after:h-0.5 after:top-10 after:-left-24 after:absolute relative after:bg-gray-300">Timers</h2>
				<TimerList />
				<ToggleableTimerForm isOpen={true} />
			</div>
		)
	}
}

class TimerList extends React.Component {
	render() {
		return (
			<div>
				<EditTimer 
					title="Learn React"
					project="Web Developement"
					elapsed="298923"
					editForOpen={false}
				/>	
				<EditTimer 
					title="Guitar"
					project="Music"
					elapsed="194856"
					editForOpen={false}
				/>	
				<EditTimer 
					title="Swimming"
					project="Olympic"
					elapsed="294856"
					editForOpen={true}
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
				<button><AiOutlinePlus /></button>
			)
		}
	}
}

class EditTimer extends React.Component {
	render() {
		if (this.props.editForOpen) {
			return(
				<TimerForm 
					title={this.props.title}
					project={this.props.project}
				/>
			)
		} else {
			return(
				<Timer 
					title={this.props.title}
					project={this.props.project}
					elapsed={this.props.elapsed}
				/>
			)
		}
	}
}

class Timer extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<h3>{this.props.project}</h3>
				<h3>{convertToHr(this.props.elapsed)}</h3>
				<div>
					<RiDeleteBin5Fill />
					<FaEdit />
				</div>
				<button>Start</button>
			</div>
		);
	}
}

class TimerForm extends React.Component {
	render() {
		let btnText;
		(this.props.title) ? (btnText="Update") : (btnText="Create")
		return (
			<div>
				<label htmlFor="title">Title</label>
				<input 
					type="text"
					name="title"
					placeholder="Title"
					value={this.props.title}
				/>
				<label htmlFor="project">Project</label>
				<input 
					type="text"
					name="project"
					placeholder="Project"
					value={this.props.project}
				/>
				<button>{btnText}</button>
				<button>Cancel</button>
			</div>
		);
	}
}
