<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link href="<%=request.getContextPath()%>/css/data_Show_Page.css"
	type="text/css" rel="stylesheet" />
<link href="<%=request.getContextPath()%>/css/global.css"
	type="text/css" rel="stylesheet" />

<style>
	div{
		display:inline-block;    width:auto;    height:auto;
	}
	.div1{
		float: left;
		width: 200px;
		height: 190px;
		background:white;
	}
	.div2{
		margin-left: 150px;
		background:white;
	}
</style>
<style type="text/css">
	body{margin:0;padding:0;}
	.grid_wrapper{
		width: 240px;
		height: 240px;

	}
	.grid{
		margin-left: 5px;
		margin-top: 5px;
	}
	.grid:after{
		content: ".";
		display: block;
		line-height: 0;
		height: 0;
		clear: both;
		visibility: hidden;
		overflow: hidden;
	}
	.grid a,.grid a:visited{
		float: left;
		display: inline;
		border: 5px solid #ccc;
		width: 80px;
		height: 60px;
		text-align: center;
		line-height: 50px;
		margin-right: -5px;
		margin-top: -5px;
		position: relative;
		z-index: 1;
	}
	.grid a:hover{
		border-color: #f00;
		z-index: 2;
	}
</style>
<!-- 总容器 container开 始-->
<div id="container">
	<!-- topDIV 开始 -->
	<div id="top">

	</div>
	<!-- topDIv 结束-->
	<!-- 内容总容器 mainDIV 开 始-->
	<div id="main">
		<!-- 左侧mainBannerDIV 开始 -->
		<div id="mainBanner">
			<div id="mainBannerTop"></div>
			<div id="mainBannerMenu">
				<!-- 左侧mainBannerMenuTopDIV 开始 -->

				<!-- 左侧mainBannerMenuTopDIV 结束-->
			</div>
			<div id="mainBannerContent">
			<!--给微博定位-->
				<div id="mainBannerContent1">
					<!--给微博定位-->
					<div id="mainBannerContent2" >
						<!--个人微博-->
						
						
						<!--个人微博-->
			
					</div>
					<div id="loading" style="display: none"><span>正在加载……</span></div>
					<div id="nomoredata" style="display: none"><span>没有更多数据！</span></div>
					<!--给微博定位结束-->
				</div>
			</div>
			<!--给微博定位结束-->
		</div>
		<!-- 左侧mainBannerDIV 结束 -->
		<!-- 右侧mainRight DIV开始 -->
		<div id="mainRight">
			<div id="mainRight1">

				<!-- 右侧mainRightPostionSixthLine DIV 结束 -->
			</div>
		</div>
	</div>
	<!-- 内容总容器 mainDIV 结束-->

</div>
<script
	src="<%=request.getContextPath()%>/js/dataPages/data_Show_Page.js"></script>
