import React from 'react';

import '../style/SearchInput.css';

const SearchInput = () => {
	return (
		<section className="row">
			<div id="selectZone__search" className="col-xs-12">
				<div className="input-group">
					<input type="text" id="search__searchInput" className="form-control" placeholder="Начни вводить имя друга" aria-describedby="search__label"/>
					<span className="input-group-addon" id="search__label">
						<span className="glyphicon glyphicon-search"></span>
					</span>
				</div>
			</div>
		</section>
	);
}

export default SearchInput;