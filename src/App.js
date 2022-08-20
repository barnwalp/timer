import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import convertToHr from "./helper";
import { v4 as uuidv4 } from 'uuid';

export default class TimersDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timers: [
				{
					title: 'Swimming otters',
					project: 'Cicus',
					id: uuidv4(),
					elapsed: 546792,
				},
				{
					title: 'Wash Raccons',
					project: 'Racoon federation',
					id: uuidv4(),
					elapsed: 446792,
				},
				{
					title: 'slap away',
					project: 'Angry cats',
					id: uuidv4(),
					elapsed: 346792,
				},
			]
		}
	}
	render() {
		return(
			<div className="max-w-xs mx-auto mt-8 mb-12 font-serif">
				<h2 className="mx-auto my-5 mb-12 text-3xl font-medium max-w-max after:content-[''] after:w-72 after:h-0.5 after:top-11 after:-left-24 after:absolute relative after:bg-gray-300">Timers</h2>
				<TimerList 
					timers={this.state.timers}
				/>
				<ToggleableTimerForm />
			</div>
		)
	}
}

class TimerList extends React.Component {
	render() {
		const timers = this.props.timers.map((timer) => (
			<EditTimer
				key={timer.id}
				id={timer.id}
				title={timer.title}
				project={timer.project}
				elapsed={timer.elapsed}
			/>
		))
		return (
			<div>
				{timers}
			</div>
		);
	}
}

class ToggleableTimerForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
	}
	render() {
		if (this.state.isOpen) {
			return (
				<TimerForm />
			)
		} else {
			return (
				<div className="flex justify-center max-w-sm p-4 mt-3 border border-gray-400 border-solid rounded-md">
					<button><AiOutlinePlus /></button>
				</div>
			)
		}
	}
}

class EditTimer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editFormOpen: false,
		}
	}
	render() {
		if (this.state.editFormOpen) {
			return(
				<TimerForm
					id={this.props.id}
					title={this.props.title}
					project={this.props.project}
				/>
			)
		} else {
			return(
				<Timer 
					id={this.props.id}
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
			<div className="max-w-sm p-4 mt-3 border border-gray-400 border-solid rounded-md">
				<h3 className="text-xl font-bold">{this.props.title}</h3>
				<h4 className="font-thin text-gray-500">{this.props.project}</h4>
				<h3 className="mx-auto text-2xl text-gray-700 max-w-fit">{convertToHr(this.props.elapsed)}</h3>
				<div className="flex justify-end gap-1">
					<RiDeleteBin5Fill />
					<FaEdit />
				</div>
				<button className="w-full p-2 py-1 mt-3 text-blue-700 border border-blue-700 border-solid rounded-md hover:border-blue-900 hover:text-blue-900 hover:shadow-md">Start</button>
			</div>
		);
	}
}

class TimerForm extends React.Component {
	render() {
		let btnText;
		(this.props.title) ? (btnText="Update") : (btnText="Create")
		return (
			<div className="flex flex-col p-4 mt-3 border border-gray-400 border-solid rounded-md">
				<label className="text-gray-700 text-md" htmlFor="title">Title</label>
				<input className="p-2 border border-solid"
					type="text"
					name="title"
					placeholder="Title"
					value={this.props.title}
				/>
				<label className="mt-2 text-md text-gray" htmlFor="project">Project</label>
				<input className="p-2 border border-solid"
					type="text"
					name="project"
					placeholder="Project"
					value={this.props.project}
				/>
				<div className="flex">
					<button className="w-2/4 p-2 py-1 mt-3 text-blue-700 border border-blue-700 border-solid rounded-md hover:border-blue-900 hover:shadow-md">{btnText}</button>
					<button className="w-2/4 p-2 py-1 mt-3 text-red-700 border border-red-700 border-solid gap-2 rounded-md hover:border-red-900 hover:shadow-md">Cancel</button>
				</div>
			</div>
		);
	}
}
