import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data)
})

export const getList = () => {
	return	(dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data.data;
			
			const action = changeList(data)
			dispatch(action);
		
		}).catch(() =>{
			console.log('can not get the data');
		})	
	}
};