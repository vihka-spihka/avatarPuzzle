import { combineReducers } from 'redux';
import userReducer from './userReducer';
import listReducer from './listReducer';
import choiceReducer from './choiceReducer';

const appReducers = combineReducers({
	userReducer: userReducer,
	listReducer: listReducer,
	choiceReducer: choiceReducer
});

export default appReducers;