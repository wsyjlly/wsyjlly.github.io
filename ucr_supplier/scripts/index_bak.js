/* ***********************************************index_bak.js*************************************************/

//页面变量初始化------------------------------------------------------------------------------------------------
//定义当前选择的一级菜单
let current_primary = 1;
//定义当前选择的左栏宽度
let mainLeftWidth=150;

//页面 document 加载完毕----------------------------------------------------------------------------------------
$(document).ready(function () {
	//页面框架初始化加载------------------------------------------------------------------------------------
	setDefaultFrame(mainLeftWidth);

	//页面初始化加载----------------------------------------------------------------------------------------
	//二级菜单数组
	const secondary_array = [
		["预约列表","预约添加","推荐申请"],
		["订单列表","待接单","待收货","待评价","已完成","订单退款"],
		["等级推荐","图片推荐","关键字"],
		["订单分析","收藏分析","预约池分析"],
		["预约场景","店铺设置","身份认证","主题颜色"],
		["店员","客户服务"],
	];
	//定义当前一级菜单对应的二级菜单事件
	$(".secondary_item").click(function () {
		$(this).css({"background":"rgb(190,194,201)","color":"#252A2F"});
		$(".secondary_item").not($(this)).css({"background":"","color":"#DBDBDB"});
		console.log(this);
	})
	//定义默认一级菜单选中样式
	$(".primary_item").eq(0).css({"background":"rgb(190,194,201)","color":"#252A2F"});
	$(".primary_item>img").eq(0).attr("src", "images/primary_1b.png");
	//定义默认二级菜单选中样式
	$(".secondary_item").eq(0).css({"background":"rgb(190,194,201)","color":"#252A2F"});
	//------------------------------------------------------------------------------------------------------



	//定义一级菜单点击事件
	$(".primary_item").click(function () {
		//获取一级菜单索引
		let index = $(this).index();
		//改变一级菜单样式
		$(this).css({"background":"rgb(190,194,201)","color":"#252A2F"});
		$(".primary_item").not($(this)).css({"background":"","color":"#DBDBDB"});
		$(this).children("img").attr("src", "images/primary_"+(index+1).toString()+"b.png");
		if(current_primary-1!==index)$(".primary_item>img").eq(current_primary-1).attr("src", "images/primary_"+(current_primary).toString()+".png");
		console.log(current_primary);
		console.log($(this).attr("src"));
		console.log($(".primary_item>img").eq(current_primary-1).attr("src"));
		//清空二级菜单原标签
		$("#secondary_menu").html("");
		//显示对应二级菜单
		for (let i = 0; i < secondary_array[index].length; i++) {
			$("#secondary_menu").append(
				"<div class=\"secondary_item\">"+secondary_array[index][i]+"</div>"
			)
		}
		$(".secondary_item").eq(0).css({"background":"rgb(190,194,201)","color":"#252A2F"});
		//为二级菜单添加点击事件
		$(".secondary_item").click(function () {
			$(this).css({"background":"rgb(190,194,201)","color":"#252A2F"});
			$(".secondary_item").not($(this)).css({"background":"","color":"#DBDBDB"});
			console.log(this);
		})
		//设置当前选中的一级菜单索引
		current_primary = index+1;
	})


	//定义视图切换按钮——>到图标栏
	$("#simple").click(function () {
		$("#logo_text,.primary_item_text").css("display","none");
		$("#circle").css("display","block");
		$("#simple").css("display","none");
		$("#logo").width(49);
		setDefaultFrame(mainLeftWidth=50);
	});
	//定义视图切换按钮——>到详细栏
	$("#circle").click(function () {
		$("#logo_text,.primary_item_text").css("display","block");
		$("#circle").css("display","none");
		$("#simple").css("display","block");
		$("#logo").width(149);
		setDefaultFrame(mainLeftWidth=150);
	});
	//定义login_logo点击事件
	$("#login_logo").click(function () {
		$("#login_content").css("display","block");
	})
	$("#login_logo").hover(function () {},function () {
		$("#login_content").css("display","none");
	})
});


//页面资源加载完毕执行------------------------------------------------------------------------------------------
// window.onload = function () {
// 	setDefaultFrame(mainLeftWidth);
// }
//浏览器窗口大小改变时执行--------------------------------------------------------------------------------------
window.onresize = function () {
	setDefaultFrame(mainLeftWidth);
}




//自定义函数----------------------------------------------------------------------------------------------------
//setDefaultFrame 函数作用：初始化页面左右栏宽度与高度为浏览器可用区宽度与高度
function setDefaultFrame(mainLeftWidth=150){
	//参数mainLeftWidth为页面左栏宽度，默认设置150px
	//浏览器可用区宽度与高度
	const innerHeight = window.innerHeight;
	const innerWidth = window.innerWidth;
	//左右栏 高度
	$("#main_left,#main_right").height(innerHeight);
	$("#primary_menu,#content").height(innerHeight-50);

	//左栏 一级菜单区,一级菜单项宽度
	$("#main_left,#primary_menu,.primary_item").width(mainLeftWidth);

	//右栏 菜单栏,内容区宽度
	$("#main_right,#nav_menu,#content").width(innerWidth-mainLeftWidth);

	//simple按钮bottom定位
	$("#simple").css("bottom",innerHeight/2);

	//窗口大小改编为较小时处理总体宽高
	if(document.documentElement.clientHeight<550){
		$("#main_left,#main_right,#primary_menu").height(550);
	}
	if(document.documentElement.clientWidth<1200){
		$("#root").width(1200);
		$("#main_right,#nav_menu").width(1200-mainLeftWidth);
	}
}