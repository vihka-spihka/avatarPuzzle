import { AUTHORIZATION_SUCCESS, LOG_OUT } from '../constants/userActionTypes';

const initialState = {
	user: {
		authorizated: false,
		userId: '',
		userName: ''
	}
}

export default function user(state = initialState, action) {

	switch(action.type) {
		case AUTHORIZATION_SUCCESS:
			return { ...state, user:action.payload };
		case LOG_OUT: 
			return {...state, user: {authorizated: false, userId: '', userName: ''} };
		default:
			return state;
	}
}