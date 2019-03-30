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
		reservation_select:20181125,
		type_select:"轮播图",
		recommend_name:"",
		img_url:"../../images/imgbg.png",
		img_select_btn_value:"选择图片",
		reservation_select_array:[
			{
				id:20181125,
				name:"新疆大红葡萄"
			},
			{
				id:20181126,
				name:"大红葡萄"
			},
			{
				id:20181127,
				name:"红葡萄"
			},
			{
				id:20181128,
				name:"葡萄"
			},
			{
				id:20181129,
				name:"葡萄"
			}
		],
		type_select_array:["轮播图","秒杀","新预约","探索"],
	},
	computed:{

	},
	watch: {

	},
	methods: {
		//方法
		add_show: function(){
			this.submit_status = "添加";
			this.img_select_btn_value = "选择图片";
			this.img_url="../../images/imgbg.png";
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

			let recommend ={
				rid:this.reservation_select,
				type:this.type_select,
				name:this.recommend_name,
				url:this.img_url,
			}
			console.log(recommend);
			window.location.href = "content_reservation_recommend.html";
		}

	},
	created: function() {
		//console.log("*******************created()执行*******************start");

		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");

		//console.log("*******************updated()执行*******************end");
	},
})