import React from 'react';
import { Link } from 'react-router';

import Header from './Header';
import AudioZone from './AudioZone';
import Game from './Game';
import Footer from './Footer';

const GamePage = (props) => {
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
						<Link to="/select">Вернуться к выбору</Link>
					</button>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default GamePage;