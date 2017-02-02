import React from 'react';

import '../style/Instruction.css';

import vkIcon from '../img/welcomePage_vk_icon.png';
import targetIcon from '../img/welcomePage_target_icon.png';
import dreamsIcon from '../img/welcomePage_dreamsIcon.png';

var Instruction = (props) => {
	return(
		<section id="siteBody__instruction" className="row">
			<div className="col-xs-12">
				<div id="instruction__description" className="row">
					<div id="" className="col-xs-12 text-center">
						<p id="description__text">всего лишь 3 простых шага для приятного времяпрепровождения:</p>
					</div>
				</div>
				<div id="description__stages" className="row">
					<div className="col-xs-12 col-md-10 col-md-offset-1">
						<div className="row">
							<section className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 text-center">
								<div className="thumbnail stages__stageItem">
									<img className="instruction__img img-responsive" src={vkIcon} alt="Логотип ВКонтакте" /> 
									<div className="caption">
										<h3 className="header--thirdLevel">Шаг #1</h3>
										<p className="stageItem__stageCaption">
											Начало <br/>Используй свой логин и пароль от сайта <a href="https://vk.com/" title="Перейти на сайт vk.com">vk.com</a> для входа
										</p>
									</div>
								</div>
							</section>
							<section className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 text-center">
								<div className="thumbnail stages__stageItem">
									<img className="instruction__img img-responsive" src={targetIcon} alt="Прицел снайпера" /> 
									<div className="caption">
										<h3 className="header--thirdLevel">Шаг #2</h3>
										<p className="stageItem__stageCaption">Цель <br/>Выбери в качестве жертвы одного из своих друзей</p>
									</div>
								</div>
							</section>
							<section className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 text-center">
								<div className="thumbnail stages__stageItem">
									<img className="instruction__img img-responsive" src={dreamsIcon} alt="Облако размышлений" /> 
									<div className="caption">
										<h3 className="header--thirdLevel">Шаг #3</h3>
										<p className="stageItem__stageCaption">Наслаждайся! <br/>P.S. просто включи музыку и погрузись в свои мысли</p>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Instruction;