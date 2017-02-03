import React from 'react';

import '../style/AudioZone.css';

const AudioZone = (props) => {
	return (
		<section id="siteBody__audioZone" className="row">
			<div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<p>Для полного расслабления послушай запись морского прибоя<br/>P.S. для полного погружения воспользуйся наушниками</p>
			</div>
			<div className="col-lg-3">
				<audio src="BirdSongs.mp3" controls loop />
			</div>
		</section>
	);
}

export default AudioZone;