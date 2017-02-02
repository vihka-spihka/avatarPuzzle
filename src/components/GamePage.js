import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';

class GamePage extends Component {
	render() {
		return (
			<div>
				<Header />
				It is <code>GamePage.js</code>
				<button className="btn btn-warning btn--inShadow"><Link to="/select">Back to the Select page</Link></button>
				<Footer />
			</div>
		);
	}
}

export default GamePage;
