import {LOAD_FRIENDS} from '../constants/listActionTypes';

export function loadFriends(friendList) {
	return {
		type: LOAD_FRIENDS,
		payload: friendList
	};
}
