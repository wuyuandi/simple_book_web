import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style.js';
import { connect } from 'react-redux';

class Detail extends Component {
	render() {
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
				dangerouslySetInnerHTML={{__html: this.props.content}} 
				/>


			</DetailWrapper>
		)
	}
	componentDidMount() {
		this.props.getDetail();

	}
}
//从reducer拿
const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
	
})


export default connect(mapState, mapDispatch)(Detail);
