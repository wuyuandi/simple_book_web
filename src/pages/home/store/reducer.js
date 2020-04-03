import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const defaultStatus = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
	
});

export default (state = defaultStatus, action) => {
	switch(action.type) {
		//get all ajax data from the beginning 
		case actionTypes.CHANG_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			})
			//load out more article 
		case actionTypes.ADD_ARTICLE_LIST:
			return state.merge({
				articleList: state.get('articleList').concat(action.list),
				articlePage: action.nextPage
			})
			//scroll up bottom show or not
		case actionTypes.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show)
		default:
			return state;
	}

}