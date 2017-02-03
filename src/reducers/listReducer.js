import { LOAD_FRIENDS } from '../constants/listActionTypes';

const initialState = {
	friendList: [
		{
			friendId: '',
			friendName: '',
			friendSurname: '',
			friendAvatar: ''
		}
	]
}

export default function listReducer (state = initialState, action) {
	switch (action.type) {
		case LOAD_FRIENDS:
			return {...state, friendList: action.payload};
		default:
			return state;
	}
}