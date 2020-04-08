import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, LoginItem, Input, LoginButton } from './style.js';
import { actionCreators } from './store';



class login extends PureComponent {
	render() {
		return (
			<LoginWrapper>
				<LoginBox>
					<LoginItem className='sign_in'>SIGN IN</LoginItem>
					
					<LoginItem className='sign_up'>SIGN UP</LoginItem>
					<Input placeholder='Account' ref={(input) => {this.account = input}}/>
					<Input placeholder='Password' type='password' ref={(input) => {this.password = input}}/>
					<LoginButton onClick={() => this.props.login(this.account, this.password)}>SIGN IN</LoginButton>
				</LoginBox>
			</LoginWrapper>
		)
	}
	componentDidMount() {
		

	}
}
//从reducer拿
const mapState = (state) => ({
	
});

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem) {
		dispatch(actionCreators.login(accountElem.value, passwordElem.value));
		
	}
	
})


export default connect(mapState, mapDispatch)(login);
