import React, { Component }  from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style.js';
import { Link } from 'react-router-dom';
class Header extends Component {

	getListArea() {
		const pageList = [];
		const jsList = this.props.list.toJS();
		if (jsList.length){ 
			for (let i = (this.props.page - 1) * 10 ; i < this.props.page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={jsList[i]}>{jsList[i]} </SearchInfoItem>

				)
			}
		}




		if (this.props.focused || this.props.mouseIn) {
			return (
				<SearchInfo onMouseEnter={this.props.handleMouseEnter}
				onMouseLeave={this.props.handleMouseLeave}>
					<SearchInfoTitle>
						Trending:
					<SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}>
						<i ref={(icon) => {this.spinIcon= icon}} className="iconfont spin">&#xe851;</i>
							Next
					</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
						}
						
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}
	render() {
		return(

		<HeaderWrapper>
			<Link to='/'>
				<Logo />
			</Link>
			<Nav>
				<Link to='/'>
				<NavItem className='left active'>Main</NavItem>
				</Link>
				<NavItem className='left'>App</NavItem>
				<NavItem className='right'>Login</NavItem>
				<NavItem className='right'>
					<span className="iconfont">&#xe636;</span>
				</NavItem>
				<SearchWrapper>
					<CSSTransition 
						in={this.props.focused}
						timeout={200}
						classNames="slide">
						<NavSearch className={this.props.focused ? 'focused': ''}
							onFocus={() => this.props.handleInputFocus(this.props.list)}
							onBlur = {this.props.handleInputBlur}
							>
						</NavSearch>
					</CSSTransition>
					<span className={this.props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe614;</span>
					{this.getListArea()}
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='writting'>
					<span className="iconfont">&#xe615;</span>Writing</Button>	
				<Button className='reg'>Sign Up</Button>
				
			</Addition>

			
		</HeaderWrapper>
		);

	}
}


const mapStateToProps = (state) => {
	return	{
		focused: state.get('header').get('focused'),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseIn: state.getIn(['header','mouseIn']),

	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			console.log(list);
			if (list.size === 0) {
				dispatch(actionCreators.getList());
			}
			
			const action = actionCreators.searchFocus();
			dispatch(action);
		},
		handleInputBlur() {
			const action = actionCreators.searchBlur();
			dispatch(action);
		},
		handleMouseEnter() {
			const action = actionCreators.mouseEnter();
			dispatch(action);
		},
		handleMouseLeave() {
			const action = actionCreators.mouseLeave();
			dispatch(action);
		},
		handleChangePage(page, totalPage, spin) {
			//console.log(spin);
			//spin.style.transform = 'rotate(360deg)';
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			console.log(originAngle);
			if ( originAngle ) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)';
			

			if (page< totalPage) {
				const action = actionCreators.changePage(page+1);
				dispatch(action);
			}else{
				const action = actionCreators.changePage(1);
				dispatch(action);
			}
			
		},
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



