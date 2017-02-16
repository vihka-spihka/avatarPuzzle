import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Header from './Header';
import SearchInput from '../containers/SearchInput';
import FriendList from '../containers/FriendList';
import Footer from './Footer';
import '../style/style.css';

class SelectPage extends Component {

	componentDidMount() {
		switch (document.location.pathname) {
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

export default SelectPage;