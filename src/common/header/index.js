import React, { Component }  from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';
const Header = (props) => {

	return(

		<HeaderWrapper>
			<Logo href='/'/>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>登陆</NavItem>
				<NavItem className='right'>
					<span className="iconfont">&#xe636;</span>
				</NavItem>
				<SearchWrapper>
					<CSSTransition 
						in={props.focused}
						timeout={200}
						classNames="slide">
						<NavSearch className={props.focused ? 'focused': ''}
							onFocus={props.handleInputFocus}
							onBlur = {props.handleInputBlur}
							>
						</NavSearch>
					</CSSTransition>
					<span className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe614;</span>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='writting'>
					<span className="iconfont">&#xe615;</span>写文章</Button>	
				<Button className='reg'>注册</Button>
				
			</Addition>

			
		</HeaderWrapper>
	)

}

const mapStateToProps = (state) => {
	return	{
		focused: state.header.focused

	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			const action = actionCreators.searchFocus();
			dispatch(action);
		},
		handleInputBlur() {
			const action = actionCreators.searchBlur();
			dispatch(action);
		}
		 

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



