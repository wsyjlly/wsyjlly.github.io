//
window.onresize = function () {
	root.$data.root_width = window.innerWidth;
	root.$data.root_height = window.innerHeight;
};
const root = new Vue({
	el:"#root",
	data:{
		root_width:window.innerWidth,
		root_height:window.innerHeight,
		reservation_id: 20181125 ,
		r_name:"新疆红葡萄酒",
		r_desc:"新疆红葡萄酒真好喝啊真好喝。。。",
		r_image:"../../images/logo.png",
		r_address_province:"河南省",
		r_address_city:"周口市",
		r_address_county:"沈丘县",
		r_address_town:"刘庄店镇",
		r_address_details:"晏老家村",
		image_type:["轮播图","详情图","步骤提示图"],         //图片类型选择
		list_image:[
			[
				{
					id:1,
					src:"../../images/user.png",
				},
				{
					id:2,
					src:"../../images/user.png",
				},
			],
			[
				{
					id:1,
					src:"../../images/logo.png",
				},
				{
					id:3,
					src:"../../images/user.png",
				},
				{
					id:3,
					src:"../../images/user.png",
				},
			],
			[
				{
					id:1,
					src:"../../images/logo.png",
				},
				{
					id:4,
					src:"../../images/user.png",
				},
			]
		],
		list_image_current_index:0,
		list_type:[
			{
				id:0,
				url:"../../images/login_logo.png",
				type_level: 3,
				typename_list:["一级分类名","二级分类名","三级分类名"],
				count:100,
				price:66.6
			},
			{
				id:1,
				url:"../../images/login_logo.png",
				type_level: 4,
				typename_list:["一级分类名","二级分类名","三级分类名","四级分类名"],
				count:100,
				price:66.6
			},
			{
				id:2,
				url:"../../images/login_logo.png",
				type_level: 2,
				typename_list:["一级分类名","二级分类名"],
				count:100,
				price:66.6
			},
			{
				id:3,
				url:"../../images/login_logo.png",
				type_level: 3,
				typename_list:["一级分类名","二级分类名","三级分类名"],
				count:100,
				price:66.6
			}
		],
		list_tip:[
			{
				id:1,
				content:"1987年，Photoshop的主要设计师托马斯·诺尔买了一台苹果计算机（MacPlus）" +
					"用来帮助他的博士论文。",
			},
			{
				id:4,
				content:"与此同时，Thomas发现当时的苹果计算机无法显示带灰度。",
			},
		],
		list_datetime:[
			{
				date:"2018-09-05 ~ 2019-10-05",
				week:"周一，周二，周三，周日",
				time:"09:10 ~ 13:10"
			},
			{
				date:"2018-09-05 ~ 2019-10-05",
				week:"周一，周二，周三，周日",
				time:"14:20 ~ 18:00"
			},
			{
				date:"2018-09-05 ~ 2019-10-05",
				week:"周四，周五",
				time:"05:20 ~ 18:00"
			}
		],
		list_step:[
			{
				id:1,
				content:"有的甚至过了 15 个工作日依然没有收到退款。打客服电话也是无人接听",
			},
			{
				id:4,
				content:"打客服电话也是无人接听",
			},
		],
		list_method:[
			{
				id:1,
				content:"自取",
			},
			{
				id:4,
				content:"配送",
			},
		],
		list_isEmpty:[
			[
				false,
				false,
				false
			],
			false,
			false,
			false,
			false,
			false
		]
	},
	computed:{

	},
	watch: {

	},
	methods: {
		update_:function(value1,value2){
			let param = "?id="+this.reservation_id+"&index="+value2;
			switch (value1) {
				case "image":{
					window.location.href="content_reservation_image_add.html"+param;
				}break;
				case "type":{
					window.location.href="content_reservation_type_add.html"+param;
				}break;
				case "datetime":{
					window.location.href="content_reservation_datetime_add.html"+param;
				}break;
				case "tip":{
					window.location.href="content_reservation_tip_add.html"+param;
				}break;
				case "step":{
					window.location.href="content_reservation_step_add.html"+param;
				}break;
				case "method":{
					window.location.href="content_reservation_method_add.html"+param;
				}break;
			}
		},
		delete_:function(value1,value2){
			switch (value1) {
				case "image":{

				}break;
				case "type":{

				}break;
				case "datetime":{

				}break;
				case "tip":{

				}break;
				case "step":{

				}break;
				case "method":{

				}break;
			}
			console.log(value1);
			console.log(value2);
		},
		reservation_delete_:function(){

		},
		main_edit:function () {
			window.location.href = "content_reservation_add.html";
		},
		image_add:function () {
			window.location.href = "content_reservation_image_add.html";
		},
		type_add:function () {
			window.location.href = "content_reservation_type_add.html";
		},
		datetime_add:function () {
			window.location.href = "content_reservation_datetime_add.html";
		},
		tip_add:function () {
			window.location.href = "content_reservation_tip_add.html";
		},
		step_add:function () {
			window.location.href = "content_reservation_step_add.html";
		},
		method_add:function () {
			window.location.href = "content_reservation_method_add.html";
		}

	},
	created: function() {
		//console.log("*******************created()执行*******************start");
		const that = this;

		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");

		//console.log("*******************updated()执行*******************end");
	},
})