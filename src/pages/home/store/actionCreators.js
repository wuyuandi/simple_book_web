import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const changeHomeData = (gotData) =>({
	type: actionTypes.CHANG_HOME_DATA,
	topicList: gotData.topicList,
	articleList: gotData.articleList,
	recommendList: gotData.recommendList
})
const addHomeList = (result, nextPage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: fromJS(result),
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/homeData.json').then((res) => {
		const gotData = res.data.data;
		const action = changeHomeData(gotData);
		dispatch(action);
	});

	}
}
export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
		const result = res.data.data;
		dispatch(addHomeList(result, page+1));

		});
	}
}
export const toggleTopShow = (show) => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
})