import styled from 'styled-components';
import LogoPic from '../../statics/yuandiwu.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	height: 56px;
	width: 100px;
	background: url(${LogoPic});
	background-size: contain;
`;
export const Nav = styled.div`
	width: 960px;
	margin: 0 auto;
	height: 100%;
	padding-right:70;
	box-sizing: border-box;
		
`;
export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;
export const SearchWrapper = styled.div`
	float: left;
	position: relative;
	.iconfont {
		position: absolute;
		right: 4px;
		line-height: 30px;
		width: 30px;
		border-radius: 15px;
		text-align: center;
		bottom: 4px;
		
		&.focused {
			background: #777;
			color: #fff;
		}
	}


`;
export const NavSearch = styled.input.attrs({
	placeholder: 'Search'
})`
	width: 240px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 300px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 300px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 240px;
	}
`;
export const Addition = styled.div`
	position: absolute;
	right: 140px;
	top: 0;
	height: 56px;
	
`;
//margin-top: 9px; margin-right: 80px;
export const Button = styled.div`
	float:right;
	margin: 8px 12px 0px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	font-size: 14px;
	&.reg {
		color: rgba(236,97,73,.7);
		border: 1px solid rgba(236,97,73,.7);
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
	
`