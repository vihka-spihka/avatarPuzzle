import { SELECT_FRIEND, RANDOM_SELECT, CHANGE_SELECT } from '../actions/choiceActions';

export function selectFriend (friendId, friendAvatar) {
	return {
		type: SELECT_FRIEND,
		payload: {
			friendId,
			friendAvatar
		}
	};
}

export function randomSelect (randomChoice) {
	return {
		type: RANDOM_SELECT,
		randomChoice
	}
}

export function changeSelect () {
	return {
		type: CHANGE_SELECT
	}
}