
import { fromJS } from 'immutable';


const defaultStatus = fromJS({
	topicList: [{
		id: 1,
		title: '热点',
		url: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip/imageView2/1/w/64/h/64'
	},{
		id:2,
		title: '手绘',
		url: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip/imageView2/1/w/64/h/64'
	}]
	
});

export default (state = defaultStatus, action) => {

	return	state;

}