import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from '../components/Header';
import AudioZone from '../components/AudioZone';
import Game from './Game';
import Footer from '../components/Footer';
import * as choiceActions from '../actions/choiceActions';

class GamePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="siteBody" className="row text-center">
					<section className="col-xs-12">
						<div className="row">
							<div className="col-xs-12">
								<h2 className="header--secondLevel">Наслаждайся игрой</h2>
							</div>
						</div>
						<AudioZone />
						<Game />
						<button className="btn btn--inShadow">
							<Link to="/select" onClick={this.props.change}>Вернуться к выбору</Link>
						</button>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return {
		change: function() {
			dispatch(choiceActions.changeSelect())
		}
	}
}

export default connect(null, mapDispatchToProps)(GamePage);