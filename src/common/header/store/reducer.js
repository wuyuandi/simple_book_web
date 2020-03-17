import * as actionTypes from './actionTypes.js';


const defaultStatus = {
	focused: false
};

export default (state = defaultStatus, action) => {
	if (action.type === actionTypes.SEARCH_FOCUS) {
		return{
			focused: true
		}
	}
	if (action.type === actionTypes.SEARCH_BLUR) {
		return{
			focused: false
		}
	}

	return	state;

}