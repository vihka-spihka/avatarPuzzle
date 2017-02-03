import { SELECT_FRIEND, RANDOM_SELECT, CHANGE_SELECT } from '../actions/choiceActions';

const initialState = {
	friend: {
		id: '',
		avatar: ''
	},
	randomChoice: false
}

export default function choiceReducer (state = initialState, action) {
	switch (action.type) {
		case SELECT_FRIEND:
			return {...state, friend: action.payload};
		case RANDOM_SELECT:
			return {...state, randomChoice: true};
		case CHANGE_SELECT:
			return {...state, friend: {id: '', avatar: ''}, randomChoice: false};
		default:
			return state;
	}
}