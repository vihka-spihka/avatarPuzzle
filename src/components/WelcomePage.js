import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import Instruction from './Instruction';
import '../style/WelcomePage.css';

class WelcomePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="siteBody" className="row">
					<div className="col-xs-12">
						<div className="row">
							<div className="col-xs-12">
								<h2 className="header--secondLevel text-center">AvatarPuzzle - это</h2>
							</div>
						</div>
						<Instruction />
						<div className="row">
							<div className="col-xs-12">
								<button id="siteBody__btn--toLogin" className="btn btn-lg center-block btn--inShadow">
									<Link to="/login">Погнали!</Link>
								</button>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default WelcomePage;