
var currtag_ids="";
var currtag_names="";
var mon = 1;
$(function () {
    $("#top").append("<div id=\"textcenter\" align=\"center\" style=\"margin-bottom:10px;\">\n" +
        "\t\t\t<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(1)\">一月</a>\n<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(2)\">二月</a>\n" +
        "\t\t\t<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(3)\">三月</a>\n<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(4)\">四月</a>\n" +
        "\t\t\t<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(5)\">五月</a>\n<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(6)\">六月</a>\n" +
        "\t\t\t<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(7)\">七月</a>\n<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(8)\">八月</a>\n" +
        "\t\t\t<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(9)\">九月</a>\n<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(10)\">十月</a>\n" +
        "\t\t\t<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(11)\">十一月</a>\n<a href=\"#\" style=\"color:#FFFFFF\" class=\"a_demo_two\" onclick=\"change_mon(12)\">十二月</a>" +
        "\t\t\t</div>" +  "<div style=\"margin-top:10px;\"><button class='login-button' onclick='cla()'>查看类别详情</button></div>")
	loadBlogDatas(mon);
	initBackToTop();
});
function cla() {
    window.open("classification_table.html");
}
function change_mon(i) {
    mon = i;
    loadBlogDatas(mon);
    initBackToTop();
}
function loadBlogDatas(mon){
	$("#loading").show();
	$("#nomoredata").hide();
	$("#mainBannerContent2").empty();
	$.ajax({
		type: 'get',
		url: 'blogData-list.action',
        data:{mon: mon},
		dataType: 'json',
		ansyc: false, //同步加载
		success: function(data){
			if(data.length>0){
				$("#mainBannerContent2").empty();
				var str="";
				for(var i =0;i<data.length;i++){
					str+=buildData($.parseJSON(data[i]['Context']),data[i]['id']);
					str+="<br/>";
				}
				str += "<div class='mydiv'>"
				str += "<a href=\"#\"  class=\"anniu\" onclick=\"loadBlogDatas(mon)\">……点击加载下一页……</a>"
                str += "</div>"
				$("#loading").hide()
				$("#mainBannerContent2").append(str);
			}else{
				$("#loading").hide();
				$("#nomoredata").show();
			}
			//更新当前查询数据的起始位置
			//动态设置主页面的高度
			var height = $("#mainBannerContent2").height();
			$("#mainBanner").height(height+20);
		}
	});
}

function initBackToTop(){
	var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("#mainBanner"))
	.text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
		$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
		var st = $(document).scrollTop();
		var winh = $(window).height();
		var doch = $(document).height() ;
		//判断是否显示 返回顶部 按钮
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });
}
/**
 * 将每条微博信息编辑成界面展示需要的格式
 * 
 */
function buildData(data,Id){
	var str = '<div id="mainBannerContent2People" dataId='+Id+'>';
	//<!-- 第二个人微博 mainBannerContent2PeopleImg DIV 开始 -->
	// str+='<div id="mainBannerContent2PeopleWord">';
	str+=buildImgs(data.pic_url);
	str+=buildTag(Id);
	// str+="</div>";
	//<!-- 第二个人微博 mainBannerContent2peopleWord DIV 结束  -->
	str+="</div>";
	return str;
}

function buildImgs(imgs){
	var str = "<div id='imgs' class='div1'>";
    str+='<img src="'+imgs+'" width="180px" height="180px"/>';
	str+="</div>";
	return str;
}

function buildTag(id){
	var str = "<div class='div2'>" + "<div class=\"grid_wrapper\">" + " <div class='grid'>"
	+ "<a href=\"###\" class=\"a2\" onclick='updata_tag_food(\""+ id +"\")'>餐饮活动</a>" + "<a href=\"###\" class=\"a2\" onclick='updata_tag_life(\""+ id +"\")'>居民活动</a>"
    + "<a href=\"###\" class=\"a2\" onclick='updata_tag_school(\""+ id +"\")'>校园活动</a>"+ "<a href=\"###\" class=\"a2\" onclick='updata_tag_outdoor(\""+ id +"\")'>户外活动</a>"
    + "<a href=\"###\" class=\"a2\" onclick='updata_tag_enterment(\""+ id +"\")'>娱乐活动</a>"  + "<a href=\"###\" class=\"a2\" onclick='updata_tag_travel(\""+ id +"\")'>出行活动</a>"
    + "<a href=\"###\" class=\"a2\" onclick='updata_tag_shopping(\""+ id +"\")'>购物活动</a>"+ "<a href=\"###\" class=\"a2\" onclick='updata_tag_work(\""+ id +"\")'>工作活动</a>"
    + "<a href=\"###\" class=\"a2\" onclick='updata_tag_sports(\""+ id +"\")'>体育活动</a>"+ "<a href=\"###\" class=\"a2\" onclick='updata_tag_others(\""+ id +"\")'>其他</a>"
	+"</div></div><br/>"
	return str;
}

function updata_tag_food(id) {
    var data={
        "pic_id":id,
        "tag_ids":"1",
        "tag_names":"餐饮活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_life(id) {
    var data={
        "pic_id":id,
        "tag_ids":"2",
        "tag_names":"居民活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_school(id) {
    var data={
        "pic_id":id,
        "tag_ids":"3",
        "tag_names":"校园活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_outdoor(id) {
    var data={
        "pic_id":id,
        "tag_ids":"4",
        "tag_names":"户外活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_enterment(id) {
    var data={
        "pic_id":id,
        "tag_ids":"5",
        "tag_names":"娱乐活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_travel(id) {
    var data={
        "pic_id":id,
        "tag_ids":"6",
        "tag_names":"出行活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_shopping(id) {
    var data={
        "pic_id":id,
        "tag_ids":"7",
        "tag_names":"购物活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_work(id) {
    var data={
        "pic_id":id,
        "tag_ids":"8",
        "tag_names":"工作活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_sports(id) {
    var data={
        "pic_id":id,
        "tag_ids":"9",
        "tag_names":"体育活动"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}
function updata_tag_others(id) {
    var data={
        "pic_id":id,
        "tag_ids":"10",
        "tag_names":"其他"
    }
    $.ajax({
        type: 'post',
        url: 'blogData-save.action',
        ansyc: false, //同步加载
        data: data,
        dataType: 'text',
        success: function(data){
            var info = $.trim(data);
            if(info=="success"){
                var txt=  "保存成功！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            }else{
                var txt="保存失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            }
        }
    })
}