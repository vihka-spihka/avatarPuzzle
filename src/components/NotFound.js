import React from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import imgNotFound from '../img/404.png';
import '../style/style.css';
import '../style/NotFound.css';

const NotFound = (props) => {
	return (
		<div>
			<Header />
			<main id="siteBody" className="row">
				<div id="ff" className="col-xs-12">
					<img src={imgNotFound} className="center-block" alt="Страница не найдена" />
					<h2 className="header--secondLevel text-center">
						Ошибка #404 Страница не найдена
					</h2>
					<h3 className="header--thirdLevel text-center">
						Страница не найдена
					</h3>
					<p className="siteBody__errorMsg text-center">
						К сожалению, искомая Вами страница не существует.
					</p>
					<p className="siteBody__errorMsg text-center">
						Проверьте правильность введенного вами адреса.
					</p>
					<p className="siteBody__errorMsg text-center">
						Вернитесь на сайт <Link to="/" className="errorMsg__link">avatarPuzzle.com</Link>
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default NotFound;