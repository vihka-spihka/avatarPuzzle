import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import configStore from './store/configStore';

const store = configStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);