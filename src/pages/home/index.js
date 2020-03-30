import React, { Component } from 'react';
import Topic from './components/Topic.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';
import { HomeWrapper, HomeLeft, HomeRight } from './style.js'

class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" alt="U of A 14th President Bill Flanagan" src="https://www.ualberta.ca/media-library/ualberta/homepage-features/cql18_0q5a1073.jpg" />
					<Topic />
					<List />

				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />

				</HomeRight>
			</HomeWrapper>
		)
	}
}
export default Home;