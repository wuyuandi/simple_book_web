import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;


`;
//图片为800x400
export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 800px;
	
	
	.banner-img {
		width: 800px;
		height: 400px;
	}

`;

export const HomeRight = styled.div`
	float: right;
	width: 300px;
	padding-top: 30px;
	margin: 0 auto;
	height: 300px;
	

`;
//Topic part css style
export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -9px;
	border-bottom: 1px solid #dcdcdc;
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
	cursor: pointer;


`;


//List part css style
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0px;

	
	border-bottom: 1px solid #dcdcdc;
	.list-pic {
		display: block;
		float: right;
		width: 125px;
		height:100px;
		border-radius: 10px;
	}
	cursor: pointer;


`;
//800-125=675
export const ListInfo = styled.div`

	width: 675px;
	float: left;
	.title {
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;
//Right side recommend style
export const RecommendWrapper = styled.div`
	
	width: 300px;

`;
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin: 0px 0px 6px;
	background: url(${(props) => props.imgUrl});
	cursor: pointer;
	background-size: contain;
`;
export const WriterWrapper = styled.div`
	width: 280px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 400px;
	line-height: 300px;
	text-align: center;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;

`;
export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
`;




