/*
 * @Author: your name
 * @Date: 2020-06-08 16:49:08
 * @LastEditTime: 2020-06-16 13:12:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /simple_book_web/src/pages/login/index.js
 */ 
import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, LoginItem, Input, LoginButton } from './style.js';
import { actionCreators } from './store';

import { Redirect } from 'react-router-dom';
//高阶组件完成表单校验
function KFformCreate(Comp) {
	
}

class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
			<LoginWrapper>
				<LoginBox>
					<LoginItem className='sign_in'>SIGN IN</LoginItem>
					<LoginItem className='sign_up'>SIGN UP</LoginItem>

					<Input placeholder='Account' ref={(input) => {this.account = input}}/>
					<Input placeholder='Password' type='password' ref={(input) => {this.password = input}}/>
					<LoginButton onClick={() => this.props.handlelogin(this.account, this.password)}>SIGN IN</LoginButton>
				</LoginBox>
			</LoginWrapper>
		)
		}else {
			return <Redirect to='/'/>
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
	handlelogin(accountElem, passwordElem) {
		dispatch(actionCreators.login(accountElem.value, passwordElem.value));
		
	}
	
})


export default connect(mapState, mapDispatch)(Login);
