import React, { Component, PropTypes } from 'react';

class User extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		const { name, error } = this.props;
		let variant;

		if (name) {
			variant = (<p>Приветствую, {name}!</p>);
		} else {
			variant = (<button className="btn btn--inShadow" onClick={this.props.handleLogin}>Вход</button>);
		}

		return (
			<div id="siteHeader__helloUser" className='row'>
				<div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
					{variant}
					{error ? <p className="helloUser_error"> {error}. Повторите вход.</p> : ''}
				</div>
			</div>
		);
	}
}

// User.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	handleLogin: PropTypes.func.isRequired,
// 	error: PropTypes.string.isRequired
// }

export default User;