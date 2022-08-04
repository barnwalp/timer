import React from "react";
import React from 'react';

class TimersDashboard extends React.Component {
	render() {
		return (
			<div className='ui three column centered grid'>
				<div className='column'>
					<EditableTimerList />
					<ToggleableTimerForm 
						// when true, the form will be displayed
						isOpen={true}	
					/>
				</div>
			</div>
		);
	}
}

class EditableTimerList extends React.Component {
	render() {
		return (
			<div id='timers'>
				<EditableTimers
					title='Learn React'
					project='Web Development'
					elapsed='8758674'
					runningSince={null}
					editFormOpen={false}
				/>
				<EditableTimers
					title='Learn extreme sliding'
					project='Slope Domination'
					elapsed='3899300'
					runningSince={null}
					editFormOpen={true}
				/>
			</div>
		)
	}
}

export default TimersDashboard;
