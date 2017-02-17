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
						<p>AvatarPuzzle является выпускным проектом, выполненным по окончанию курсов frontend-разработки в компании Epam.<br/>
							Цель приложения:
							<br/>собрать пазл из аватара своего друга в Вконтакте.<br/>
							Заходить в свою учетную запись, среди своих друзей выбираешь одного из них, собираешь пазл.<br/>
							Не отказывай себе ни в чем, воткни в уши наушники и погрузить в мывли под пение райских птиц.
							AvatarPuzzle - прекрасная возможность отдохнуть от повседневной суеты.
						</p>
					</section>
				</main>
			<Footer />
		</div>
	);
}

export default About;