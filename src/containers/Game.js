import React, { Component } from 'react';

import '../style/Game.css';
import puzzleImg from '../img/letter.jpg';
import $ from 'jquery';

import '../style/jquery.jqpuzzle.css';
import '../libs/jquery.mb.browser.min';
import '../script/jquery.jqpuzzle.min';

class Game extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		var mySettings = { 
			cols: 5, 
			hole: 11, 
			numbers: false, 
			control: { 
				toggleNumbers: false, 
				counter: false, 
				timer: false 
			}, 
			animation: { 
				shuffleRounds: 1, 
				slidingSpeed: 100, 
				shuffleSpeed: 200 
			} 
		}; 

		$('#puzzleImg').jqPuzzle(mySettings);
	}

	render() {
		return (
			<section id="siteBody__game" className="row">
				<div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-4 col-lg-6 col-lg-offset-3">
					<img id="puzzleImg" src={puzzleImg} className="img-responsive jqPuzzle jqp-r4-c5-h11-NCDE center-block" alt="Puzzle" />
				</div>
			</section>
		);
	}
}

export default Game;