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
		recommend_list:[
			{
				id:"20181125",
				name:"新疆吐鲁番红葡萄",
				recommend_type:"轮播图",
				recommend_img_url:"../../images/logo.png",
				recommend_name:"吐鲁番大葡萄",
				recommend_dates:10,
				status:"成功"
			},
			{
				id:"20181125",
				name:"新疆吐鲁番红葡萄",
				recommend_type:"轮播图",
				recommend_img_url:"../../images/logo.png",
				recommend_name:"吐鲁番大葡萄",
				recommend_dates:10,
				status:"申请中"
			},
			{
				id:"20181125",
				name:"新疆吐鲁番红葡萄",
				recommend_type:"轮播图",
				recommend_img_url:"../../images/logo.png",
				recommend_name:"吐鲁番大葡萄",
				recommend_dates:10,
				status:"失败"
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
			window.location.href = "content_reservation_recommend_apply.html?id="+this.recommend_list[index].id;
			//alert(this.reservation_list[index].id);
		},
		delete_:function(index){
			let isSure = window.confirm("确认取消吗？");
			if (!isSure){
				return false;
			}
			this.recommend_list.splice(index,1);
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
		this.reservation_num = this.recommend_list.length;

		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");
		this.reservation_num = this.recommend_list.length;

		//console.log("*******************updated()执行*******************end");
	},
})