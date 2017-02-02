import React, { Component } from 'react';
import { Link } from 'react-router';

import '../style/Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer id="siteFooter" className="row">
				<menu id="siteFooter__menu" className="col-xs-4 col-sm-5 col-sm-offset-1">
					<ul id="menu__menuList" className="nav navbar-nav">
						<li className="menuList__menuItem"><Link to="/">Главная</Link></li>
						<li className="menuList__menuItem"><Link to="about">О проекте</Link></li>
					</ul>
				</menu>
				<div className="col-xs-8 col-sm-5">
					<p id="menu__support" className="navbar-text navbar-right">
						Возникли вопросы или предложения? <br />Смело пиши на
						: <a href="mailto:avatar_puzzle_support@gmail.com?subject=Вопросы и предложения по сайту avatarPuzzle.ru" className="navbar-link" title="Написать email">
							avatar_puzzle_support@gmail.com
						</a>
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;