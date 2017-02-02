import React, { Component } from 'react';
import { Link } from 'react-router';

import '../style/Header.css';
import logo from '../img/min_logo.png';

class Header extends Component {
	render() {
		return (
			<header id="siteHeader" className="row">
				<div className="col-xs-12">
					<Link to="/">
						<img src={logo} id="siteHeader__logoImg" className="center-block" alt="AvatarPuzzle logo"/>
					</Link>
					<h1 className="header--firstLevel text-center">AvatarPuzzle</h1>				
				</div>
			</header>
		);
	}
}

export default Header;

// <button id="siteHeader__logoutBtn" className="btn btn--inShadow"><Link to="/">Выйти</Link></button>
