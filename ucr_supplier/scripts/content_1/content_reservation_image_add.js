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
		isEmpty:false,                                     //当前图片数组对象是否为空
		add_item_show:false,                               //图片选择修改编辑模块是否显示
		isChanged:false,                                   //图片路径是否改变
		submit_status:"添加",                               //提交按钮状态
		current_image_added_index:0,                        //当前图片数组对象的图片id
		image_type_current_index:0,                         //当前类型图片id
		image_type_current:[],                              //当前类型图片数组对象
		image_src_current_temp:null,                        //修改前图片路径
		id:0,                                               //当前编辑图片id
		img_url:"../../images/imgbg.png",                      //当前编辑图片路径
		img_select_btn_value:"选择图片",                    //图片选择按钮状态
		image_type:["轮播图","详情图","步骤提示图"],         //图片类型选择
		image_added:[
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
		]
	},
	computed:{

	},
	watch: {
		//监听img_url属性变化
		img_url:function (val) {
			if (val==="../../images/imgbg.png") {
				this.isChanged = false;
			}else if (val!==this.image_src_current_temp) {
				this.isChanged = true;
			}else{
				this.isChanged = false;
			}
		}
	},
	methods: {
		//图片添加按钮
		add_show:function () {
			this.add_init();
			this.add_item_show=true;
		},
		//选择类型事件
		select_type_click:function (index) {
			this.image_type_current = this.image_added[index];
			//console.log(this.image_type_current);
			this.add_init();
		},
		//文件选择事件
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
		//更新事件
		update_:function (index) {
			this.submit_status = "更新";
			this.current_image_added_index = index;
			this.id = this.image_type_current[index].id;
			this.img_url = this.image_type_current[index].src;
			this.image_src_current_temp = this.image_type_current[index].src;
			this.add_item_show = true;
		},
		//删除事件
		delete_:function (index) {
			this.image_added[this.image_type_current_index].splice(index,1);
			this.id = this.image_added_mix_id(this.image_type_current);
			if (index === this.current_image_added_index){
				this.submit_status = "添加";
			}
		},
		//提交事件
		submit:function () {
			let image_add_item = {
				id:this.image_added_mix_id(this.image_type_current),
				src:this.img_url
			};
			if (this.submit_status === "添加") {
				this.image_added[this.image_type_current_index].push(image_add_item);
			}else{
				if (this.img_url === this.image_src_current_temp) {
					alert("亲，您还未修改内容！");
					return false;
				}
				this.image_added[this.image_type_current_index].splice(this.current_image_added_index,1,image_add_item);
			}
			this.add_init();
		},
		//获取当前image类型的最大id+1
		image_added_mix_id:function(array){
			let temp = 0;
			for (let index in array){
				if(array[index].id>temp){
					temp = array[index].id;
				}
			}
			return temp+1;
		},
		//图片添加初始化
		add_init:function () {
			this.submit_status = "添加";
			this.img_select_btn_value = "选择图片";
			this.img_url = "../../images/imgbg.png";
			this.id = this.image_added_mix_id(this.image_type_current);
		}
	},
	created: function() {
		//console.log("*******************created()执行*******************start");
		//初始化当前选择图片类型
		this.image_type_current = this.image_added[0];
		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");
		//监听图片路径更改，按钮背景颜色改变
		if (this.image_type_current.length===0) {
			this.isEmpty = true;
			this.add_item_show = true;
		}else {
			this.isEmpty = false;
		}
		//console.log("*******************updated()执行*******************end");
	},
})