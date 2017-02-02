import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import '../style/style.css';
import '../style/SelectPage.css';
import ava from '../img/logo.png';

class SelectPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="siteBody" className="row">
					<div className="col-xs-12">
						<div className="row">
							<div className="col-xs-12 text-center">
								<h2 className="header--secondLevel">Сделай свой выбор</h2>
							</div>
						</div>
						<div className="row">
							<div id="siteBody__selectZone" className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
								<ul id="siteBody__friendList" className="list-group media-list">
									<li className="friendList__friendListItem list-group-item media">
										<div className="media-left">
											<img className="media-object friendListItem__userAvatar" src={ava} alt="User avatar" />
										</div>
										<div className="media-body">
											<h4 className="media-heading friendListItem__userName">Maaaaaan1</h4>
										</div>
									</li>
									<li className="friendList__friendListItem list-group-item media">
										<div className="media-left">
											<img className="media-object friendListItem__userAvatar" src={ava} alt="User avatar" />
										</div>
										<div className="media-body">
											<h4 className="media-heading friendListItem__userName">Maaaaaan2</h4>
										</div>
									</li>
									<li className="friendList__friendListItem list-group-item media">
										<div className="media-left">
											<img className="media-object friendListItem__userAvatar" src={ava} alt="User avatar" />
										</div>
										<div className="media-body">
											<h4 className="media-heading friendListItem__userName">Maaaaaan3</h4>
										</div>
									</li>
									<li className="friendList__friendListItem list-group-item media">
										<div className="media-left">
											<img className="media-object friendListItem__userAvatar" src={ava} alt="User avatar" />
										</div>
										<div className="media-body">
											<h4 className="media-heading friendListItem__userName">Maaaaaan4</h4>
										</div>
									</li>
									<li className="friendList__friendListItem list-group-item media">
										<div className="media-left">
											<img className="media-object friendListItem__userAvatar" src={ava} alt="User avatar" />
										</div>
										<div className="media-body">
											<h4 className="media-heading friendListItem__userName">Maaaaaan5</h4>
										</div>
									</li>
									<li className="friendList__friendListItem list-group-item media">
										<div className="media-left">
											<img className="media-object friendListItem__userAvatar" src={ava} alt="User avatar" />
										</div>
										<div className="media-body">
											<h4 className="media-heading friendListItem__userName">Maaaaaan6</h4>
										</div>
									</li>
									<li className="friendList__friendListItem list-group-item media">
										<div className="media-left">
											<img className="media-object friendListItem__userAvatar" src={ava} alt="User avatar" />
										</div>
										<div className="media-body">
											<h4 className="media-heading friendListItem__userName">Maaaaaan7</h4>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-4 col-xs-offset-8 col-sm-4 col-sm-offset-8 col-md-5 col-md-offset-7 col-lg-5 col-lg-offset-7">
								<button className="btn btn--inShadow"><Link to="/game">Выбрать</Link></button>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default SelectPage;