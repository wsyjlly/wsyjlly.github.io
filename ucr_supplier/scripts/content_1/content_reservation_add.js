window.onresize = function () {
	root.$data.root_width = window.innerWidth;
	root.$data.root_height = window.innerHeight;
};
const root = new Vue({
	el:"#root",
	data:{
		root_width:window.innerWidth,
		root_height:window.innerHeight,
		title:"添加预约",
		img_url:"",
		r_name:"",
		r_desc:"",
		r_province:"",
		r_city:"",
		r_county:"",
		r_town:"",
		img_select_btn_value:"选择图片"
	},
	computed:{

	},
	watch: {

	},
	methods: {
		//方法
		submit:function(){
		    $.ajax({
			type:"GET",
			// dataType:"JSON",
			url: "https://wsyjlly.cn/supplier/user/message/147260",
			success: function(data){
			    // alert(data);
			    console.log(data);
			}
		    });
		    $.ajax({
			type:"POST",
			dataType:"JSON",
					data:{
			    supplierID :100001,
			    supplier_pwd : "ysw123456"
					},
			url: "https://wsyjlly.cn/supplier/login",
			success: function(data){
			    // alert(data);
			    console.log(data);
			}
		    });
			// $.get("https://wsyjlly.cn/text",function (e) {
			// 	console.log(e);
			// })
			// //1.创建XMLHttpRequest
			// var request = new XMLHttpRequest();
			// //2.准备发送数据
			// var url = "https://wsyjlly.cn/webItem_UCR_SSM/user/message/147260";
			// var method = "GET";
			// //3.调用XMLHttpRequest对象的open方法
			// request.open(method,url);
			// //4.调用XMLHttpRequest对象的send方法
			// request.send(null);
			// //5.为XMLHttpRequest对象添加onreadystatechange响应函数
			// request.onreadystatechange = function () {
			// 	//6.判断响应是否完成：XMLHttpRequest对象的nreadyState属性值为4的时候
			// 	if (request.redayState == 4) {
			// 		//7.判断响应是否可用：XMLHttpRequest对象的status属性值为200
			// 		if (request.status == 200 || request.status == 304) {
			// 			//8.获取响应结果responseText
			// 			alert(request.responseText);
			//
			// 		}
			// 	}
			// }
			// //9.取消a节点默认行为
			// return false;
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
	},
	beforeCreate: function(){
		//console.log("*******************beforeCreate()执行*******************start");

		//console.log("*******************beforeCreate()执行*******************end");
	},
	created: function() {
		//console.log("*******************created()执行*******************start");

		//console.log("*******************created()执行*******************end");
	},
	beforeMount:function(){
		//console.log("*******************beforeMount()执行*******************start");

		//console.log("*******************beforeMount()执行*******************end");
	},
	mounted: function(){
		//console.log("*******************mounted()执行*******************start");

		//console.log("*******************mounted()执行*******************end");

	},
	beforeUpdate: function(){
		//console.log("*******************beforeUpdate()执行*******************start");

		//console.log("*******************beforeUpdate()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");

		//console.log("*******************updated()执行*******************end");
	},
	activated: function(){
		//console.log("*******************activated()执行*******************start");

		//console.log("*******************activated()执行*******************end");
	},
	deactivated: function(){
		//console.log("*******************deactivated()执行*******************start");

		//console.log("*******************deactivated()执行*******************end");
	},
	beforeDestroy: function(){
		//console.log("*******************beforeDestroy()执行*******************start");

		//console.log("*******************beforeDestroy()执行*******************end");
	},
	destroyed: function(){
		//console.log("*******************destroyed()执行*******************start");

		//console.log("*******************destroyed()执行*******************end");
	},
	errorCaptured: function(){
		//console.log("*******************errorCaptured()执行*******************start");

		//console.log("*******************errorCaptured()执行*******************end");
	}
})