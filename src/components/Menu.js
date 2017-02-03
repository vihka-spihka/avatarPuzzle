import React from 'react';
import { Link } from 'react-router';

import '../style/Menu.css';

const Menu = (props) => {
	return (
		<menu id="siteFooter__menu" className="col-xs-4 col-sm-5 col-sm-offset-1">
			<ul id="menu__menuList" className="nav navbar-nav">
				<li className="menuList__menuItem"><Link to="/">Главная</Link></li>
				<li className="menuList__menuItem"><Link to="about">О проекте</Link></li>
			</ul>
		</menu>
	);
}

export default Menu;