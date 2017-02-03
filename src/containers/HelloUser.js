import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import { loginSuccess, logout } from '../actions/userActions';
import store from '../index';
import * as userActions from '../actions/userActions'

import '../style/style.css';

class HelloUser extends Component {

	render() {
		return(
			<div className="row">
				<div className="col-xs-12 text-right">
					<p id="siteHeader__helloUser">Привет, {this.props.user}</p>
					<button onClick={this.props.logout.bind(this)} id="siteHeader__logoutBtn" className="btn btn--inShadow">
						<Link to="/">Выйти</Link>
					</button>
				</div>
			</div>
		);
	}
}

HelloUser.PropTypes = {user: PropTypes.string};

function mapStateToProps (store) {
	return {
		user: store.userReducer.user.userName
	}
}

function mapDispatchToProps (dispatch, ownProps) {
	return {
		logout: function() {
			dispatch(userActions.logout());
		}
	}
}

// store.subscribe(store);

export default connect(mapStateToProps, mapDispatchToProps)(HelloUser);
// export default HelloUser;