import React from 'react';

import '../style/RegForm.css';

const RegForm = (props) => {

	return (
		<section className="row">
			<div className="col-xs-12 text-center">
				<a href="https://oauth.vk.com/authorize?client_id=5871128&display=popup&redirect_uri=http://localhost:3000/select&scope=friends&response_type=token&v=5.62" className="btn btn--inShadow" title="Переход на страницу авторизации VK">Войти</a>
			</div>
		</section>
	);
}

export default RegForm;