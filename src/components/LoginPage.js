import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';

class LoginPage extends Component {
	render() {
		return (
			<div>
				<Header />
				It is LoginPage.js
				<button className="btn btn-info btn--inShadow"><Link to="/select">Войти</Link></button>
				<Footer />
			</div>
		);
	}
}

export default LoginPage;
