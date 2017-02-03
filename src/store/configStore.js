import { createStore } from 'redux';
import appReducers from '../reducers/reducer';

export default function configStore(initialState) {

	const store = createStore(appReducers, initialState);

	// if (module.hot) {

	// 	module.hot.accept('../reducers', () => {
			
	// 		const nextRootReducer = require('../reducers');
	// 		store.replaceReducer(nextRootReducer);
	// 	})
	// }

	return store;
}