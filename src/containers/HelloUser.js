import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as userActions from '../actions/userActions'

import '../style/style.css';

class HelloUser extends Component {

	componentDidMount() {
		console.log('didMount',this.props.user);
		if (this.props.user === '') {
			$('.siteHeader__helloUser').eq(0).hide();
		} else {
			$('.siteHeader__helloUser').eq(0).show();
		}	
	}

	render() {
		return(
			<div className="row siteHeader__helloUser text-right">
				<div className="col-xs-12">
					<p id="helloUser__text">Привет, {this.props.user}</p>
					<button id="siteHeader__logoutBtn" className="btn btn--inShadow">
						<Link to="/" onClick={this.props.logout}>Выйти</Link>
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

function mapDispatchToProps (dispatch) { //ownProps
	return {
		logout: function() {
			dispatch(userActions.logout());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloUser);
// export default HelloUser;