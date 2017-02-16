import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import $ from 'jquery';

import { routes } from '../constants/routesConstants';

import '../style/style.css';

class App extends Component {
	
	componentDidMount() {
		switch (document.location.pathname) {
			case '/select': 
				$('.siteHeader__helloUser').eq(0).show();
				break;
			case '/game':
				$('.siteHeader__helloUser').eq(0).show();
				break;
			default: $('.siteHeader__helloUser').eq(0).hide();
		}
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
