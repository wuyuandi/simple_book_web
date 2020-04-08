import styled from 'styled-components';
import LogoPic from '../../statics/yuandiwu.png';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
	background: #fff;
`;

export const Logo = styled.div`
	position: absolute;
	top: 2px;
	left: 50px;
	display: block;
	height: 54px;
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
	cursor: pointer;
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
	.zoom {
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
export const SearchInfo = styled.div`
	position: absolute;
	left:0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	background: #fff;


`;
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;

`
export const SearchInfoSwitch = styled.span`
	float:right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		margin-right: 1px;
		font-size: 11px;
		transition: all 0.5s ease-in;
		transform-origin: center center;
	}
`;
export const SearchInfoList = styled.div`
	overflow: hidden;
`	
export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	margin-right:10px;
	margin-bottom: 10px;
	font-size: 12px;
	padding: 0 5px;
	line-height: 20px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 2px;
`
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
	cursor: pointer;
	&.reg {
		color: #1DA1F2;
		border: 1px solid #1DA1F2;
	}
	&.writting {
		color: #fff;
		background: #1DA1F2;
	}
	
`