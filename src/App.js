import React from 'react';

/**
 * you will need a place to store your state in this component.
  design `App` to be the parent component of your application.
  this component is going to take care of state, and any change handlers you need to work with your state
 */

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: [
				{
					task: 'Organize Garage',
					id: Date.now(),
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: Date.now(),
					completed: false
				}
			]
		};
	}

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
			</div>
		);
	}
}

export default App;
