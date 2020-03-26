import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;


`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 825px;
	height: 500px;
	
	.banner-img {
		width: 825px;
		height: 400px;
	}

`;

export const HomeRight = styled.div`
	float: right;
	width: 240px;
	padding-top: 30px;
	margin: 0 auto;
	height: 300px;
	

`;
//Topic 
export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -8px;
	
`;
export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 18px;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
		border-radius: 4px 0px 0px 4px;
	}


`;