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
		isEmpty:false,
		add_item_show:false,
		hasChanged:false,
		submit_status:"添加",
		current_datetime_index:0,
		start_date:null,
		end_date:null,
		start_time:null,
		end_time:null,
		week_select:[],
		datetime_array_item_temp:{
			start_date:null,
			end_date:null,
			start_time:null,
			end_time:null,
			week_select:[],
		},
		week_array:[
			{
				value:"周一",
				selected:false
			},
			{
				value:"周二",
				selected:false
			},
			{
				value:"周三",
				selected:false
			},
			{
				value:"周四",
				selected:false
			},
			{
				value:"周五",
				selected:false
			},
			{
				value:"周六",
				selected:false
			},
			{
				value:"周日",
				selected:false
			}
		],
		datetime_table_array:[
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
		// datetime_table_array2:[
		// 	{
		// 		date:"2018-9-5 ~ 2019-10.5",
		// 		contain_weekday:[
		// 			{
		// 				week:"周一，周二，周三，周日",
		// 				contain_time:["9:10 ~ 13:10","14:20 ~ 18:00"]
		// 			},
		// 			{
		// 				week:"周四，周五",
		// 				contain_time:["5:20 ~ 18:00"]
		// 			}
		// 		]
		// 	}
		//
		// ]
	},
	computed:{

	},
	watch: {

	},
	methods: {
		//添加按钮点击随机事件
		add_show:function () {
			this.add_init();
		},
		//周选择事件
		week_select_click:function () {
			this.week_select_array();
		},
		//更新事件
		update_:function(index){
			this.add_init();
			let dait = this.datetime_table_array[index];
			let dait_date = dait.date.split(" ~ ");
			let dait_time = dait.time.split(" ~ ");
			let dait_week = dait.week.split("，");
			//console.log(dait_week);
			this.add_item_show = true;
			this.submit_status = "更新";
			this.current_datetime_index = index;


			this.start_date = dait_date[0];
			this.end_date = dait_date[1];
			this.start_time = dait_time[0];
			this.end_time = dait_time[1];
			this.week_select = dait_week;
			//暂存当前修改项未改变值
			this.datetime_array_item_temp.start_date = dait_date[0];
			this.datetime_array_item_temp.end_date = dait_date[1];
			this.datetime_array_item_temp.start_time = dait_time[0];
			this.datetime_array_item_temp.end_time = dait_time[1];
			this.datetime_array_item_temp.week_select = dait_week;
			for (let index in this.week_array) {
				for (let inner_index in dait_week) {
					if(this.week_array[index].value===dait_week[inner_index]){
						this.week_array[index].selected = true;
					}
				}
			}
		},
		//删除事件
		delete_:function(index){
			this.datetime_table_array.splice(index,1);
		},
		//提交按钮点击事件
		submit:function () {
			//判断各编辑框是否填写值
			if( this.start_date === null){
				alert("请选择起始日期！");
				return false;
			}
			if( this.end_date === null){
				alert("请选择结束日期！");
				return false;
			}
			if( this.week_select === []){
				alert("请选择每周可预约时间！");
				return false;
			}
			if( this.start_time === null){
				alert("请选择起始时间！");
				return false;
			}
			if( this.end_time === null){
				alert("请选择结束时间！");
				return false;
			}

			//将选中的周号生成字符串
			let week_temp = "";
			for (let index in this.week_select) {
				week_temp+=this.week_select[index];
				if (index != (this.week_select.length-1)){
					week_temp+="，"
				}
			}
			//声明准备添加或修改的数组项
			let item_add_temp = {
				date:this.start_date+" ~ "+this.end_date,
				week:week_temp,
				time:this.start_time+" ~ "+this.end_time
			};


			if (this.submit_status === "添加") {
				this.datetime_table_array.push(item_add_temp);
			}else{
				let dait = this.datetime_array_item_temp;
				if(
					dait.start_date === this.start_date&&
					dait.end_date === this.end_date&&
					dait.start_time === this.start_time&&
					dait.end_time === this.end_time&&
					dait.week_select.toString() === this.week_select.toString()
				){
					alert("亲，您还未修改内容！");
					return false;
				}
				this.datetime_table_array.splice(this.current_datetime_index,1,item_add_temp);
			}
			//提交后初始化编辑区
			this.add_init();
		},
		//计算选中的星期数组
		week_select_array: function () {
			this.week_select=[];
			for (let index in this.week_array) {
				//console.log(this.week_array[index].selected===true);
				if (this.week_array[index].selected===true) {
					this.week_select.push(this.week_array[index].value);
				}
			}
		},
		//初始化添加状态
		add_init:function () {
			this.add_item_show = true;
			this.hasChanged = false;
			this.submit_status = "添加";
			this.start_date = null;
			this.end_date = null;
			this.start_time = null;
			this.end_time = null;
			this.week_select = [];
			for (let index in this.week_array) {
				this.week_array[index].selected = false;
			}
		}
	},
	created: function() {
		//console.log("*******************created()执行*******************start");

		//计算选中的星期号
		this.week_select_array();

		//console.log("*******************created()执行*******************end");
	},
	updated: function(){
		//console.log("*******************updated()执行*******************start");

		//计算选中的星期号
		this.week_select_array();

		//监视时间列表数组是否为空，改变编辑区显示状态
		if (this.datetime_table_array.length===0) {
			this.isEmpty = true;
			this.add_item_show = true;
		}else {
			this.isEmpty = false;
		}

		//监视编辑框状态，改变提交按钮状态
		let dait = this.datetime_array_item_temp;
		if(
			//是否返回到初始化添加状态
			this.start_date === null&&
			this.end_date === null&&
			this.start_time === null&&
			this.end_time === null&&
			this.week_select.toString()===""
		){
			this.hasChanged = false;
		}else if(
			//是否已修改原内容
			dait.start_date === this.start_date&&
			dait.end_date === this.end_date&&
			dait.start_time === this.start_time&&
			dait.end_time === this.end_time&&
			dait.week_select.toString() === this.week_select.toString()
		){
			this.hasChanged = false;
		}else{
			this.hasChanged = true;
		}

		//console.log("*******************updated()执行*******************end");
	},
})