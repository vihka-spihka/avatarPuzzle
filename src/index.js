import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import appReducers from './reducers/reducer';
import { Provider } from 'react-redux';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(appReducers);

console.log(store.getState());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.subscribe(store.getState);