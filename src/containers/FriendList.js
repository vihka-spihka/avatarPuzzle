import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as listActions from '../actions/listActions';
// import * as data from '../data/friendList.json';

import '../style/FriendList.css';
import avatar from '../img/letter.jpg';

class FriendList extends Component {
	
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		var data = 
	{
		"friendId": "14",
		"friendName": "Настя",
		"friendSurname": "Ларина",
		"friendAvatar": "../img/14.jpg"
	};
		// var friends = JSON.parse(data);
		console.log('friensList data', data)
		this.props.load(data);
	}

	componentDidMount() {
		$('#siteBody__friendList').on('click','.friendList__friendListItem' , (e) => {
			console.log('Destination',e.target);
			e.target.classList.add('choosed');
		});
	}


	render() {
		return (
			<section className="row">
				<div className="col-xs-12">
					<ul id="siteBody__friendList" className="media-list">
						
						<li className="friendList__friendListItem media">
							<div className="media-left">
								<img className="media-object friendListItem__userAvatar" src={avatar} alt="User avatar" />
							</div>
							<div className="media-body">
								<p className="media-heading friendListItem__userName">Ололо Ололоевич</p>
							</div>
						</li>
						
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