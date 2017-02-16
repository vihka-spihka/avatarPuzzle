import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as userActions from '../actions/userActions'

import '../style/style.css';
import '../style/HelloUser.css';

class HelloUser extends Component {

	componentDidMount() {
		console.log('didMount',this.props.user);	
	}

	componentDidUpdate() {
		
		switch (document.location.pathname) {
			case '/':
				$('.siteHeader__helloUser').eq(0).hide();
			case  '/login':
				$('.siteHeader__helloUser').eq(0).hide();
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
		return(
			<div className="row siteHeader__helloUser text-right">
				<div className="col-xs-12">
					<p id="helloUser__text">Привет, {this.props.user}</p>
					<button onClick={this.props.logout} id="siteHeader__logoutBtn" className="btn btn--inShadow">
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