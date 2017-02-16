import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
// import { configStore } from './store/configStore';
import appReducers from './reducers/reducer';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(appReducers);
// const store = configStore();

console.log(store.getState);


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.subscribe(store.getState);

// function showState() {
//   const state = store.getState();
// }
 
// store.subscribe(showState);