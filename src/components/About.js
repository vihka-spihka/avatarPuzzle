import React from 'react';

import Header from './Header';
import Footer from './Footer';
import '../style/style.css';

const About = () => {
	return (
		<div>
			<Header />
				<main id="siteBody" className="row">
					<div className="col-xs-12">
						<h2 className="text-center">О проекте AvatarPuzzle</h2>
						<p>AvatarPuzzle является выпускным проектом, выполненным по окончании курсов по frontend-разработке в компании Epam.</p>
					</div>
				</main>
			<Footer />
		</div>
	);
}

export default About;