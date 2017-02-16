import { AUTHORIZATION_SUCCESS, LOG_OUT } from '../constants/userActionTypes';

export function loginSuccess(userId, userName) {
	return {
		type: AUTHORIZATION_SUCCESS,
		payload: {
			authorizated: true,
			userId,
			userName
		}
	}
}

export function logout() {
	return {
		type: LOG_OUT
	}
}