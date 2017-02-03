import React from 'react';
import { Link } from 'react-router';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';

import '../style/Header.css';
import HelloUser from '../containers/HelloUser'
import logo from '../img/logo.png';
//import User from '../containers/User';
//import * as userActions from '../actions/userActions';

const Header = (props) => {

		/*const user = this.props;
		const { handleLogin } = this.props.userActions;*/

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

// function mapStateToProps(state) {
// 	return {
// 		user: state.user
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		userActions: bindActionCreators(userActions, dispatch)
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)

// <button id="siteHeader__logoutBtn" className="btn btn--inShadow"><Link to="/">Выйти</Link></button>
