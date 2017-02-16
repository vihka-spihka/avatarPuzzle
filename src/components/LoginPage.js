import React from 'react';

import Header from './Header';
import RegForm from './RegForm';
import Footer from './Footer';
import '../style/style.css';

const LoginPage = (props) => {
	return (
		<div>
			<Header />
			<main id="siteBody" className="row">
				<div className="col-xs-12">
					<section className="row">
						<div className="col-xs-12 col-sm-10 col-sm-offset-1">
							<h2 className="header--secondLevel text-center">Вход</h2>
							<p className="text-center">Используй свой аккаунт от сайта Вконтакте, чтобы войти в систему</p>
						</div>
					</section>
					<RegForm />
					<section className="row">
						<div className="col-xs-12">
							<p className="text-center">
								Нет аккаунта на vk.com? <br/>
								Срочно беги <a href="https://vk.com/" title="Переход на сайт Вконтакте">регистрироваться</a> и возвращайся назад!
							</p>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default LoginPage;