import React, { PureComponent } from 'react';
import Topic from './components/Topic.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from './style.js'
import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Home extends PureComponent {



	handleScrollTop () {
		window.scrollTo(0,0);


	}
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" alt="U of A 14th President Bill Flanagan" src="//upload-images.jianshu.io/upload_images/11864358-a0a516a8e7bbaa45?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" />
					<Topic />
					<List />

				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />

				</HomeRight>
				{this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>UP</BackTop> : null}
			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();


	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}


}
const mapState = (state) => ({
	showScroll: state.get('home').get('showScroll')
})


const mapDispatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 400) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
	
});
export default connect(mapState, mapDispatch)(Home);
