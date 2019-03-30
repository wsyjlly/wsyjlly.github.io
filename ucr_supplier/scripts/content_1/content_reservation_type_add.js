//content_reservation_type_add.js

window.onload=function(){}
window.onresize = function () {
	root.$data.root_width = window.innerWidth;
	root.$data.root_height = window.innerHeight;
};
const typename_array = [{ name:"一级分类名", value:""},{ name:"二级分类名",value:"" },{name:"三级分类名", value:""},{name:"四级分类名",value:"" }];
const root = new Vue({
	el:"#root",
	data:{
		isEmpty:false,
		item_add_show:false,
		submit_status:"添加",
		img_select_btn_value:"选择图片",
		current_type_added_index:0,
		root_width:window.innerWidth,
		root_height:window.innerHeight,
		id:0,
		typename_list:typename_array,
		type_level: 1,
		count:null,
		price:null,
		img_url:"../../images/imgbg.png",
		type_added:[
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
		]
	},
	computed:{

	},
	watch: {

	},
	methods: {
		//方法
		select_type:function (type_level) {
			const that = this;
			that.typename_list= typename_array.slice(0,type_level);
			// console.log(this.typename);
		},
		add_show: function(){
			this.item_add_show = true;
			this.submit_status = "添加";
			this.img_select_btn_value = "选择图片";
			this.id = this.type_added_mix_id(this.type_added);

			this.type_level= 1;
			this.typename_list= typename_array.slice(0,1);
			for (let index in this.typename_list){
				this.typename_list[index].value = "";
			}
			this.count=null;
			this.price=null;
			this.img_url="../../images/imgbg.png";
		},
		type_added_mix_id:function(array){
			let temp = 0;
			for (let index in array){
				if(array[index].id>temp){
					temp = array[index].id;
				}
			}
			return temp+1;
		},
		update_:function(index){
			this.submit_status = "更新";
			this.img_select_btn_value = "更改图片";
			this.current_type_added_index = index;
			let temp = this.type_added[index];

			this.id = temp.id;
			this.type_level =  temp.type_level;
			this.count = temp.count;
			this.price = temp.price;
			this.img_url = temp.url;


			this.typename_list= typename_array.slice(0,temp.type_level);
			for (let index in this.typename_list){
				this.typename_list[index].value=temp.typename_list[index];
			}
			this.item_add_show = true;

			// console.log(temp);
		},
		delete_:function(index){
			// let temp = this.type_added[index];
			this.type_added.splice(index,1);
			// console.log(index);
		},
		file_select:function(){
			let file = $("#file_select");
			// console.log(file.val());
			let windowURL = window.URL || window.webkitURL;
			// console.log(window.URL);
			// console.log(window.webkitURL);
			let suffix =(file.val().split("."))[file.val().split(".").length-1];
			let suffixarray = new Array("jpg","png");  //定义可支持的图片格式
			let filesize = 2 * 1024 * 1024;       	//定义上传的图片最大为2M
			let size = file[0].files[0].size;
			let flag = 0;
			for(let i = 0;i<suffixarray.length;i++){
				if(suffixarray[i] == suffix){
					flag = 1;
				}
			}
			if(flag == 0){
				alert("图片文件必须是png或jpg格式！");
				return false;
			}else if (size >= filesize) {
				alert("文件大于2M，请重新选择！");
				return false;
			}else{
				let dataURL = windowURL.createObjectURL(file[0].files[0]);
				this.img_url = dataURL;
				this.img_select_btn_value = "更改图片";
				// console.log(dataURL);
			}

		},
		submit:function (){
			const that = this;
			// console.log(that.type_level);
			// console.log(that.typename_list);
			// console.log(that.count);
			// console.log(that.price);
			// console.log(that.img_url);
			let type_name_list_temp = new Array();
			for(let item in that.typename_list){
				type_name_list_temp.push(that.typename_list[item].value);
				if (that.typename_list[item].value==="") {
					alert("请输入"+that.typename_list[item].name);
					return false;
				}
			}
			if(that.count===null) {
				alert("请输入库存！");return false;
			}else if(!(that.count >= 0)) {
				alert("请输入正确格式的库存数量！");return false;
			}
			if(that.price===null) {
				alert("请输入单价！"); return false;
			}else if(!(that.price >= 0)) {
				alert("请输入正确格式的单价！");return false;
			}
			if(that.img_url==="../../images/imgbg.png") { alert("请选择类型图片！"); return false; }
			let temp_type_item = {
				id:that.id,
				url:that.img_url,
				type_level: that.type_level,
				typename_list:type_name_list_temp,
				count:that.count,
				price:that.price
			};
			// console.log(temp_type_item);
			if(that.submit_status==="添加"){
				that.type_added.push(temp_type_item);
			}else{
				that.type_added.splice(that.current_type_added_index,1,temp_type_item);
			}

			this.img_select_btn_value = "选择图片";
			that.item_add_show = false;
		}

	},
	created: function() {
		//console.log("*******************created()执行*******************start");
		const that = this;
		that.typename_list= typename_array.slice(0,that.type_level);

		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");
		// console.log(this.type_added);
		if (this.type_added.length===0) {
			this.isEmpty = true;
			this.item_add_show = true;
		}else {
			this.isEmpty = false;
		}
		//console.log("*******************updated()执行*******************end");
	},
})