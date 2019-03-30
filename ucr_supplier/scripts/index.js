/*vue     index.js*/
/**	构建用户界面的渐进式框架 组件 数据绑定
 * 	Vue常用内置指令
 * 	v:text	更新元素的text Content
 * 	v-html	更新元素的innerHTML
 * 	v-if	如果为true，当前标签才会输出到页面
 * 	v-else	如果为false，当前标签才会输出到页面
 * 	v-show	通过控制display样式来控制显示/隐藏
 * 	v-for	遍历数组/对象
 * 	v-on	绑定事件监听，一般简写为@
 * 	v-bind	强制绑定解析表达式，可以省略为 :
 * 	v-model	双向数据绑定
 * 	ref	为某给元素注册一个唯一标识，vue对象通过$refs属性法访问这个元素对象
 * 	v-cloak	使用它防止闪现表达式，与css配合：[v-cloak]{display:none}
 */
const root = new Vue({
	el:"#root",
	data:{
		current_primary : 0,
		current_secondary: [0,0,0,0,0,0],
		current_src:"content/content_2/content_order_list.html",
		login_content_show : false,
		root_scroll: 'scroll_none',
		main_width : window.innerWidth,
		main_height : window.innerHeight,
		main_left_width: 150,
		main_right_width : this.main_width-this.main_left_width,
		main_top_height : 50,
		main_bottom_height : window.innerHeight-50,
		primary_array:[
			{
				src1:"images/primary_1.png",
				src2:"images/primary_1b.png",
				name:"我的预约",
				selected:true
			},
			{
				src1:"images/primary_2.png",
				src2:"images/primary_2b.png",
				name:"订单管理",
				selected:false
			},
			{
				src1:"images/primary_3.png",
				src2:"images/primary_3b.png",
				name:"推荐申请",
				selected:false
			},
			{
				src1:"images/primary_4.png",
				src2:"images/primary_4b.png",
				name:"预约联系",
				selected:false
			},
			{
				src1:"images/primary_5.png",
				src2:"images/primary_5b.png",
				name:"运营分析",
				selected:false
			},
			{
				src1:"images/primary_6.png",
				src2:"images/primary_6b.png",
				name:"相关设置",
				selected:false
			}
		],
		secondary_array : [
			[
				// current_secondary:0,
				{selected:true,name:"预约列表",src:"content/content_1/content_reservation_list.html"},
				{selected:false,name:"预约添加",src:"content/content_1/content_reservation_add.html"},
				{selected:false,name:"推荐申请",src:"content/content_1/content_reservation_recommend.html"},
			],
			[
				{selected:true,name:"订单列表",src:"content/content_2/content_order_list.html?id=0"},
				{selected:false,name:"待付款",src:"content/content_2/content_order_list.html?id=1"},
				{selected:false,name:"待接单",src:"content/content_2/content_order_list.html?id=2"},
				{selected:false,name:"待取消",src:"content/content_2/content_order_list.html?id=3"},
				{selected:false,name:"待确认",src:"content/content_2/content_order_list.html?id=4"},
				{selected:false,name:"待评价",src:"content/content_2/content_order_list.html?id=5"},
				{selected:false,name:"已完成",src:"content/content_2/content_order_list.html?id=6"},
				{selected:false,name:"订单退款",src:"content/content_2/content_order_list.html?id=7"},
			],
			[
				{selected:true,name:"推荐列表",src:"content/content_1/content_reservation_recommend.html"},
				{selected:false,name:"推荐添加",src:"content/content_1/content_reservation_recommend_add.html"},
			],
			[
				{selected:true,name:"店员",src:""},
				{selected:false,name:"客户服务",src:""},
			],
			[
				{selected:true,name:"订单分析",src:"content/content_5/content_analyze_order.html"},
				{selected:false,name:"收藏分析",src:""},
				{selected:false,name:"预约池分析",src:""},
			],
			[
				{selected:true,name:"预约场景",src:""},
				{selected:false,name:"店铺设置",src:""},
				{selected:false,name:"身份认证",src:""},
				{selected:false,name:"主题颜色",src:""},
			]
		]
	},
	watch: {
		main_width: function (value) { // 相当于属性的set
			const that = this;
			//console.log('watch----------------------main_width', value);
			that.main_right_width = value - that.main_left_width;

		},
		main_left_width:function(value){
			const that = this;
			//console.log('watch----------------------main_left_width', value);
			that.main_right_width = that.main_width - value;

			window.localStorage.setItem("width",that.main_right_width);
			//console.log('watch----------------------main_right_width', that.main_right_width);
			//console.log('watch----------------------main_width', that.main_width);
		},
		main_height: function (value) { // 相当于属性的set
			const that = this;
			//console.log('watch----------------------main_height', value);
			if(value>=550){
				that.main_bottom_height = value - 50;
			}
			window.localStorage.setItem("height",that.main_bottom_height);
		}
	},
	methods: {
		//一级菜单点击事件
		primary_menu_click(index){
			// let {primary_array,current_primary} = this;
			this.primary_array[this.current_primary].selected = false;
			this.primary_array[index].selected = true;
			this.current_primary = index;
			this.current_src = this.secondary_array[index][this.current_secondary[index]].src;
			window.localStorage.setItem("current_primary",this.current_primary);
			window.localStorage.setItem("current_src",this.current_src);
			window.localStorage.setItem("current_secondary",this.current_secondary[index]);
		},
		//二级事件点击事件
		secondary_item_click(index){
			// let {current_primary,secondary_array,current_secondary} = this;
			this.secondary_array[this.current_primary][this.current_secondary[this.current_primary]].selected = false;
			this.secondary_array[this.current_primary][index].selected = true;
			this.current_src = this.secondary_array[this.current_primary][index].src;
			this.current_secondary[this.current_primary] = index;
			window.localStorage.setItem("current_src",this.current_src);
			window.localStorage.setItem("current_secondary",index);
		},
		//一级菜单文字收缩按钮
		simple_click(){
			let that=this;
			// let {main_left_width,main_right_width} = this;
			that.main_left_width = 50;
			that.main_right_width = that.main_width-50;
			window.localStorage.setItem("main_left_width",that.main_left_width);
		},
		//一级菜单文字展开按钮
		details_click() {
			let that=this;
			that.main_left_width = 150;
			that.main_right_width = window.innerWidth - this.main_left_width;
			window.localStorage.setItem("main_left_width",that.main_left_width);
		},
		//登录logo点击事件
		login_logo_click() {
			let that=this;
			that.login_content_show = true;
		},
		//鼠标离开login_logo事件
		login_logo_mouseleave() {
			let that=this;
			that.login_content_show = false;
		},
		setDefaultFrame() {

			//console.log("*******************setDefaultFrame()执行*******************start");
			const  that = this;
			// that.main_height = window.innerHeight;
			// that.main_width = window.innerWidth;
			if(window.innerHeight<550){
				that.main_height = 550;
				that.main_bottom_height = 500;
				that.root_scroll = "";
				// console.log("window.innerHeight="+window.innerHeight);
			}
			if(window.innerWidth<1200){
				that.main_width = 1200;
				that.root_scroll = "";
				// console.log("window.innerWidth="+window.innerWidth);
			}
			that.main_right_width = that.main_width-that.main_left_width;
			that.main_bottom_height = that.main_height-50;
			// window.localStorage.setItem("width",that.main_right_width);
			// window.localStorage.setItem("height",that.main_bottom_height);
			//console.log("that.main_right_width"+that.main_right_width);
			//console.log("that.main_bottom_height"+that.main_bottom_height);
			//console.log("*******************setDefaultFrame()执行*******************end");
		}
	},
	beforeCreate: function(){
		// console.log("*******************beforeCreate()执行*******************start");
		// console.log("*******************beforeCreate()执行*******************end");
	},
	created: function() {
		// console.log("*******************created()执行*******************start");
		//缓存取一级菜单栏宽度
		let m_l_w = window.localStorage.getItem("main_left_width");
		if(m_l_w!==null){
			this.main_left_width=m_l_w;
		}
		//缓存取当前页面
		let c_src = window.localStorage.getItem("current_src");
		if(c_src!==null){
			this.current_src=c_src;
			//缓存取当前一级菜单索引
			let c_p =window.localStorage.getItem("current_primary");
			if (c_p!==null){
				this.current_primary=c_p;
				this.primary_array[0].selected = false;
				this.primary_array[c_p].selected = true;
			}
			let c_s =  parseInt(window.localStorage.getItem("current_secondary"));
			if(c_s!==null){
				this.current_secondary[this.current_primary]=c_s;
				this.secondary_array[this.current_primary][0].selected = false;
				this.secondary_array[this.current_primary][c_s].selected = true;
			}

		}
		this.setDefaultFrame();
		// console.log("*******************created()执行*******************end");
	},
	beforeMount:function(){
		// console.log("*******************beforeMount()执行*******************start");
		// console.log("*******************beforeMount()执行*******************end");
	},
	mounted: function(){
		// console.log("*******************mounted()执行*******************start");
		// console.log("*******************mounted()执行*******************end");

	},
	beforeUpdate: function(){
		// console.log("*******************beforeUpdate()执行*******************start");
		// console.log("*******************beforeUpdate()执行*******************end");
	},
	updated: function(){
		// console.log("*******************updated()执行*******************start");
		this.setDefaultFrame();
		// console.log("*******************updated()执行*******************end");
	},
	activated: function(){
		// console.log("*******************activated()执行*******************start");
		// console.log("*******************activated()执行*******************end");
	},
	deactivated: function(){
		// console.log("*******************deactivated()执行*******************start");
		// console.log("*******************deactivated()执行*******************end");
	},
	beforeDestroy: function(){
		// console.log("*******************beforeDestroy()执行*******************start");
		// console.log("*******************beforeDestroy()执行*******************end");
	},
	destroyed: function(){
		// console.log("*******************destroyed()执行*******************start");
		// console.log("*******************destroyed()执行*******************end");
	},
	errorCaptured: function(){
		//console.log("*******************errorCaptured()执行*******************start");
		//console.log("*******************errorCaptured()执行*******************end");
	},
	// render: function () {
	// 	console.log("*******************render()执行*******************start");
	// 	console.log("*******************render()执行*******************end");
	// },
	// renderError: function () {
	// 	console.log("*******************renderError()执行*******************start");
	// 	console.log("*******************renderError()执行*******************end");
	// },
})
//窗口变动时改变vue对象root中的属性main_width，main_height的值
window.onresize = function () {
	// root.$data.main_width=window.innerWidth;
	// root.$data.main_height=window.innerHeight;

	//console.log("*******************window.onresize()执行*******************start");
	if(window.innerHeight<=500){
		root.$data.main_height = 500;
		root.$data.root_scroll = '';
	}else{
		root.$data.main_height = window.innerHeight;
	}
	if(window.innerWidth<=1200){
		root.$data.main_width = 1200;
		root.$data.root_scroll = '';
	}else{
		root.$data.main_width = window.innerWidth;
	}
	//console.log("*******************window.onresize()执行*******************end");
}