import React from 'react';

import Header from './Header';
import Footer from './Footer';
import '../style/style.css';

const About = () => {
	return (
		<div>
			<Header />
				<main id="siteBody" className="row">
					<section className="col-xs-12">
						<h2 className="header--secondLevel text-center">О проекте AvatarPuzzle</h2>
						<p>AvatarPuzzle является выпускным проектом, выполненным по окончанию курсов frontend-разработки в компании Epam.</p>
					</section>
				</main>
			<Footer />
		</div>
	);
}

export default About;