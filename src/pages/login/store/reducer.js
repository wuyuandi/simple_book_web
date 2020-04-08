import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const defaultStatus = fromJS({
	login: false,
	
	
});

export default (state = defaultStatus, action) => {
	switch(action.type) {
		
		default:
			return state;
	}

}