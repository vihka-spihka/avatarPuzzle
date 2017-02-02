import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import { routes } from './constants/routesConstants';

import './style/style.css';

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="container-fluid">
				<Router history={ browserHistory }>
					{routes}
				</Router>
			</div>
		);
	}
}

export default App;
