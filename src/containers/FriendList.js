import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as listActions from '../actions/listActions';
import * as data from '../data/friendList.json';

import '../style/FriendList.css';
// import avatar from '../img/logo.png';

class FriendList extends Component {
	
	constructor(props) {
		super(props);
	}

	componentWillMount() {

		const clientId = 5871128;
		var urlHash = document.location.hash;
		console.log('redirect url hash',urlHash);
		const accessToken = urlHash.substring(14, 99);
		console.log('accessToken', accessToken);
		var userId = urlHash.substr(125);
		console.log('user id', userId);

		const userInfoRequestUrl = 'https://api.vk.com/method/users.get?user_ids=' + userId + '&fields=bdate&v=5.62';

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

		this.props.load(data);
	}


	render() {
		return (
			<section className="row">
				<div className="col-xs-12">
					<ul id="siteBody__friendList" className="media-list">
						{this.props.map((index, item) => 
						<li key={index} className="friendList__friendListItem media">
							<div className="media-left">
								<img className="media-object friendListItem__userAvatar" src={item.imgUrl} alt="User avatar" />
							</div>
							<div className="media-body">
								<p className="media-heading friendListItem__userName">{item.name} {item.surname}</p>
							</div>
						</li>
						)}
					</ul>
				</div>
			</section>
		);
	}
}

FriendList.PropTypes = PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // friend id from VK
		name: PropTypes.string.isRequired, // friend name from VK
		surname: PropTypes.string.isRequired, // friend surname from VK
		imgUrl: PropTypes.string.isRequired // friend main image url from VK
	})
);

function mapStateToProps (store) {
	return {
		name: store.listReducer.friendList.friendName,
		surname: store.listReducer.friendList.friendSurname,
		imgUrl: store.listReducer.friendList.friendAvatar
	}
}

function mapDispatchToProps (dispatch, ownProps) {
	return {
		load: function(list) {
			dispatch(listActions.loadFriends(list))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);