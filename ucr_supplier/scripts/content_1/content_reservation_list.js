/**/
window.onresize = function () {
	root.$data.root_width = window.innerWidth;
	root.$data.root_height = window.innerHeight;
};
const root = new Vue({
	el:"#root",
	data:{
		isEmpty:false,
		root_width:window.innerWidth,
		root_height:window.innerHeight,
		num_every_page:10,
		current_page:1,
		total_page:28,
		reservation_num:0,
		isTurnPage_show:false,
		reservation_list:[
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			},
			{
				id:"20181125",
				img_url:"../../images/logo.png",
				name:"新疆吐鲁番红葡萄",
				price_max:99.9,
				price_min:32.8,
				count_total:200,
				collect_num:0,
				shopping_cart_num:0,
				order_num:0,
				status:"在线"
			}
		]

	},
	computed:{

	},
	watch: {
		reservation_num:function (val) {
			//console.log(val);
			if (val>this.num_every_page) {
				this.isTurnPage_show = true;
			}
		}
	},
	methods: {
		//方法
		update_:function (index) {
			window.location.href = "content_reservation_details.html?id="+this.reservation_list[index].id;
			//alert(this.reservation_list[index].id);
		},
		recommend_:function(index){
			window.location.href = "content_reservation_recommend_add.html?rid="+this.reservation_list[index].id;
		},
		last_page_click: function(){
			if(this.current_page>1){
				this.current_page--;
			}
		},
		next_page_click: function(){
			if(this.current_page<this.reservation_num){
				this.current_page++;
			}

		},


	},
	created: function() {
		//console.log("*******************created()执行*******************start");
		this.reservation_num = this.reservation_list.length;

		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");
		this.reservation_num = this.reservation_list.length;

		//console.log("*******************updated()执行*******************end");
	},
})