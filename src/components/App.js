import React from 'react';
import { Router, browserHistory } from 'react-router';

import { routes } from '../constants/routesConstants';

import '../style/style.css';

const App = () => {
	return (
		<div className="container-fluid">
			<Router history={ browserHistory }>
				{routes}
			</Router>
		</div>
	);
}

export default App;
