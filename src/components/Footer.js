import React from 'react';

import Menu from './Menu';
import Support from './Support';
import '../style/Footer.css';

const Footer = (props) => {
	return (
		<footer id="siteFooter" className="row">
			<Menu />
			<Support />
		</footer>
	);
}

export default Footer;