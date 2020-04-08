import styled from 'styled-components';


export const LoginWrapper = styled.div`
	z-index:0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
	
`;
export const LoginBox = styled.div`
	width: 400px;
	height: 400px;
	margin: 100px auto 0;
	padding: 20px 0px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0 8px rgba(0,0,0,.1)
`;
export const LoginItem = styled.div`
	
	width: 80px;
	height: 30px;
	padding: 10px;
	line-height: 30px;
	font-size: 14px;
	margin: 10px auto;
	color: #969696;
	
	&.sign_in  {

		margin-left: 90px;
		float: left;
		text-align: center;
		border-bottom: 2px solid #ea6f5a;
	}
	&.sign_up {
		margin-right: 90px;
		float:right;
		text-align: center;
		border-bottom: 2px solid #ea6f5a;
	}
	
`;

export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 20px auto;
	color: #777;
	
`;

export const LoginButton = styled.div`
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background:#1DA1F2;
	border-radius: 13px;
	margin: 10px auto;
	text-align: center;
	
`;