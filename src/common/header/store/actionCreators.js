import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
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
export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER

});
export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE

});
export const changePage = (page) => ({
	type: actionTypes.CHANGE_PAGE,
	page

});