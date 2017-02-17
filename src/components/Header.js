import React from 'react';
import { Link } from 'react-router';

import '../style/Header.css';
import HelloUser from '../containers/HelloUser'
import logo from '../img/logo.png';

const Header = (props) => {
	return (
		<header id="siteHeader" className="row">
			<div className="col-xs-12">
				<Link to="/">
					<img src={logo} id="siteHeader__logoImg" className="center-block" alt="AvatarPuzzle logo"/>
				</Link>
				<h1 className="header--firstLevel text-center">AvatarPuzzle</h1>
				<HelloUser />	
			</div>
		</header>
	);
}

export default Header;