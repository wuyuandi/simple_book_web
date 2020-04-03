import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../style.js';
import { connect } from 'react-redux';
class Topic extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<TopicWrapper>
				{
					list.map((item) => {
						return (
							<TopicItem	key={item.get('id')}>
								<img className='topic-pic' src={item.get('imgUrl')} alt=''/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
				



			</TopicWrapper>
		)
	}
}
//only need to get the data from store, for this component, we dont have to psuh date to store 
const mapState = (state) => ({
	list: state.get('home').get('topicList')

});
export default connect(mapState, null)(Topic);
