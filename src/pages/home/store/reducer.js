
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
	}],
	articleList: [{
		id: 1,
		author: '',
		comments: 0,
		title:'标记了一个（或封装一组）操作命令',
		desc: '标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。在 Ant Design 中，我们有四种按钮。主按钮：用于主行动点，一个操作区域只能有一个主按钮。默认按钮：用于没有主次之分的一组行动点。虚线按钮：常用于添加操作。链接按钮：用于次要或外链的行动点。以及四种状态属性与上面配合使用。',
		imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip/imageView2/1/w/64/h/64'
	},{
		id: 2,
		author: '',
		comments: 0,
		title:'bbbbbbbbbbbb',
		desc: '标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。在 Ant Design 中，我们有四种按钮。主按钮：用于主行动点，一个操作区域只能有一个主按钮。默认按钮：用于没有主次之分的一组行动点。虚线按钮：常用于添加操作。链接按钮：用于次要或外链的行动点。以及四种状态属性与上面配合使用。',
		imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip/imageView2/1/w/64/h/64'
	},{
		id: 3,
		author: '',
		comments: 0,
		title:'aaaaaaaaaaaaa',
		desc: '标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。在 Ant Design 中，我们有四种按钮。主按钮：用于主行动点，一个操作区域只能有一个主按钮。默认按钮：用于没有主次之分的一组行动点。虚线按钮：常用于添加操作。链接按钮：用于次要或外链的行动点。以及四种状态属性与上面配合使用。',
		imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip/imageView2/1/w/64/h/64'
	}],
	recommendList: [{
		id:1,
		imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
	},{
		id:2,
		imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
	},{
		id:3,
		imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
	},{
		id:4,
		imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
	}]
	
});

export default (state = defaultStatus, action) => {

	return	state;

}