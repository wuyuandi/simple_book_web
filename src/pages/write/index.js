import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';


class Write extends PureComponent {
	
	render() {
		console.log(111);
		const { loginStatus } = this.props;
		if (loginStatus) {
			return (
				<div>write</div>
			)
		}else {
			return <Redirect to='/login'/>
		}
		
	}
	componentDidMount() {
		

	}
	
}
//从reducer拿
const mapState = (state) => ({
	loginStatus: state.getIn(['login','login'])
	
});

const mapDispatch = (dispatch) => ({
	
})


export default connect(mapState, mapDispatch)(Write);
