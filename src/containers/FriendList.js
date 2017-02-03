import React, { Component, PropTypes } from 'react';

import '../style/FriendList.css';
import avatar from '../img/logo.png';

class FriendList extends Component {
	
	constructor(props) {
		super(props);
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
								<p className="media-heading friendListItem__userName">Maaaaaan1</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default FriendList;

FriendList.PropTypes = PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // friend id from VK
		name: PropTypes.string.isRequired, // friend name from VK
		surname: PropTypes.string.isRequired, // friend surname from VK
		avatar: PropTypes.string.isRequired // friend main image url from VK
	})
);
