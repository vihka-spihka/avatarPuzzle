import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import $ from 'jquery';

import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import FriendList from './FriendList';
import Footer from '../components/Footer';
import '../style/style.css';
import * as userActions from '../actions/userActions';
// import * as userInfo from '../data/userInfo.json';

class SelectPage extends Component {

	componentWillMount() {

		// const clientId = 5871128;
		var urlHash = document.location.hash;
		// console.log('redirect url hash',urlHash);
		// const accessToken = urlHash.substring(14, 99);
		// console.log('accessToken', accessToken);
		
		var userId = urlHash.substr(125);
		console.log('user id', userId);

		// const userInfoRequestUrl = 'https://api.vk.com/method/users.get?user_ids=' + userId + '&fields=bdate&v=5.62';

		//Promise, that returns error because of the localhost
		
		// const promise = new Promise((resolve, reject) => {
		// 	$.ajax({
		// 		url: userInfoRequestUrl,
		// 		success: function (response) {
		// 			resolve(response);
		// 		},
		// 		error: function(...args) {
		// 			reject(args);
		// 		}
		// 	})
		// });

		// promise.then(response => {
		// 	 console.log(response);
		// 	let user = JSON.parse(response);
		// 	return user;
		// })
		// .catch((error) => {
		// 	console.log('Error cached: ', error);
		// });

		// parsed from response
		var userName = "Viktoriya";

		this.props.login(userId, userName);
	}

	render() {
		return (
			<div>
				<Header />
				<main id="siteBody" className="row">
					<section className="col-xs-12">
						<div className="row">
							<div className="col-xs-12 text-center">
								<h2 className="header--secondLevel">Сделай свой выбор</h2>
							</div>
						</div>
						<div className="row">
							<div id="siteBody__selectZone" className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
								<SearchInput />
								<FriendList />
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6 col-xs-offset-1 col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-3">
								<div id="siteBody__randomSelect" className="checkbox">
									<label>
										<input id="randomSelect__randomFriendCheckbox" type="checkbox" value="randomFriend"/>
										Случайный выбор
									</label>
								</div>
							</div>
							<div className="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-2 col-md-5 col-md-offset-2 col-lg-5 col-lg-offset-2">
								<button id="siteBody__selectBtn" className="btn btn--inShadow"><Link to="/game">Выбрать</Link></button>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

function mapDispatchToProps (dispatch, ownProps) {
	return {
		login: function(userId, userName) {
			dispatch(userActions.loginSuccess(userId, userName))
		}
	}
}

export default connect(null, mapDispatchToProps)(SelectPage);