import React from 'react';

import '../style/Support.css';

const Support = (props) => {
	return (
		<div className="col-xs-8 col-sm-5">
			<p id="menu__support" className="navbar-text navbar-right">
				Возникли вопросы или предложения? <br />Смело пиши на
				: <a href="mailto:avatar_puzzle_support@gmail.com?subject=Вопросы и предложения по сайту avatarPuzzle.ru" className="navbar-link" title="Написать email">
					avatar_puzzle_support@gmail.com
				</a>
			</p>
		</div>
	);
}

export default Support;