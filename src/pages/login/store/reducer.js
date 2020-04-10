import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const defaultStatus = fromJS({
	login: false,
	
	
});

export default (state = defaultStatus, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_LOGIN:
			return state.set('login', action.value);
		case actionTypes.CHANGE_LOGOUT:
			return state.set('login', action.value);
		default:
			return state;
	}

}