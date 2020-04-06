import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const defaultStatus = fromJS({
	title: '',
	content: ''	
});

export default (state = defaultStatus, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
	
		default:
			return state;
	}

}