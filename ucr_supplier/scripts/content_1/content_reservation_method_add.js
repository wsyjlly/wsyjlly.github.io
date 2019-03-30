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
		current_method_added_index:0,
		add_input_id:null,
		add_input_content:"",
		add_input_content_temp:"",
		submit_status:"添加",
		isChanged:false,
		isEmpty:false,
		item_add_show:false,
		method_added:[
			{
				id:1,
				content:"自取",
			},
			{
				id:4,
				content:"配送",
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
			this.current_method_added_index = index;
			this.add_input_id = this.method_added[index].id;
			this.add_input_content = this.method_added[index].content;
			this.add_input_content_temp = this.method_added[index].content;
			this.item_add_show = true;
		},
		delete_:function (index) {
			this.method_added.splice(index,1);
			this.add_input_id = this.method_added_mix_id(this.method_added);
			if (index === this.current_method_added_index){
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
				this.method_added.push(temp_tip_item);
			}else{
				if (this.add_input_content === this.add_input_content_temp) {
					alert("亲，您还未修改内容！");
					return false;
				}
				this.method_added.splice(this.current_method_added_index,1,temp_tip_item);
			}

			this.item_add_show = false;
			this.add_init();
		},
		add_init:function(){
			this.isChanged = false;
			this.add_input_id = this.method_added_mix_id(this.method_added);
			this.submit_status = "添加";
			this.add_input_content = "";
		},
		method_added_mix_id:function(array){
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
		this.add_input_id = this.method_added_mix_id(this.method_added);
		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");
		if (this.method_added.length===0) {
			this.isEmpty = true;
			this.item_add_show = true;
		}else {
			this.isEmpty = false;
		}
		//console.log("*******************updated()执行*******************end");
	},
})