import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';


const defaultStatus = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultStatus, action) => {
	if (action.type === actionTypes.SEARCH_FOCUS) {
		return state.set('focused', true);
	}
	if (action.type === actionTypes.SEARCH_BLUR) {
		return state.set('focused', false);
	}
	if (action.type === actionTypes.CHANGE_LIST) {
		return state.set('list',action.data).set('totalPage', action.totalPage);
	}
	if (action.type === actionTypes.MOUSE_ENTER) {
		return state.set('mouseIn', true);
	}
	if (action.type === actionTypes.MOUSE_LEAVE) {
		return state.set('mouseIn', false);
	}
	if (action.type === actionTypes.CHANGE_PAGE) {
		return state.set('page', action.page);
	}

	return	state;

}