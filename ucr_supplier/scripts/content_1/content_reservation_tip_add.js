//content_reservation_tip_add.js
window.onresize = function () {
	root.$data.root_width = window.innerWidth;
	root.$data.root_height = window.innerHeight;
};
const root = new Vue({
	el:"#root",
	data:{
		root_width:window.innerWidth,
		root_height:window.innerHeight,
		current_tip_added_index:0,
		add_input_id:null,
		add_input_content:"",
		add_input_content_temp:"",
		submit_status:"添加",
		isChanged:false,
		isEmpty:false,
		item_add_show:false,
		tip_added:[
			{
				id:1,
				content:"1987年，Photoshop的主要设计师托马斯·诺尔买了一台苹果计算机（MacPlus）" +
					"用来帮助他的博士论文。",
			},
			{
				id:4,
				content:"与此同时，Thomas发现当时的苹果计算机无法显示带灰度。",
			},
		]
	},
	computed:{

	},
	watch: {
		add_input_content:function (val) {
			if (val==="") {
				this.isChanged = false;
			}else if (val!==this.add_input_content_temp) {
				this.isChanged = true;
			}else{
				this.isChanged = false;
			}
		}
	},
	methods: {
		add_show:function () {
			this.item_add_show = true;
			this.add_init();
		},
		update_:function (index) {
			this.submit_status = "更新";
			this.current_tip_added_index = index;
			this.add_input_id = this.tip_added[index].id;
			this.add_input_content = this.tip_added[index].content;
			this.add_input_content_temp = this.tip_added[index].content;
			this.item_add_show = true;
		},
		delete_:function (index) {
			this.tip_added.splice(index,1);
			this.add_input_id = this.tip_added_mix_id(this.tip_added);
			if (index === this.current_tip_added_index){
				this.submit_status = "添加";
			}
		},
		submit:function () {
			let temp_tip_item = {
				id:this.add_input_id,
				content:this.add_input_content
			};
			if (temp_tip_item.content === "") {
				alert("您未输入提示内容！");
				return false;
			}
			if(this.submit_status==="添加"){
				this.tip_added.push(temp_tip_item);
			}else{
				if (this.add_input_content === this.add_input_content_temp) {
					alert("亲，您还未修改内容！");
					return false;
				}
				this.tip_added.splice(this.current_tip_added_index,1,temp_tip_item);
			}

			this.item_add_show = false;
			this.add_init();
		},
		add_init:function(){
			this.isChanged = false;
			this.add_input_id = this.tip_added_mix_id(this.tip_added);
			this.submit_status = "添加";
			this.add_input_content = "";
		},
		tip_added_mix_id:function(array){
			let temp = 0;
			for (let index in array){
				if(array[index].id>temp){
					temp = array[index].id;
				}
			}
			return temp+1;
		},
	},
	created: function() {
		//console.log("*******************created()执行*******************start");
		const that = this;
		this.add_input_id = this.tip_added_mix_id(this.tip_added);
		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");
		if (this.tip_added.length===0) {
			this.isEmpty = true;
			this.item_add_show = true;
		}else {
			this.isEmpty = false;
		}
		//console.log("*******************updated()执行*******************end");
	},
})