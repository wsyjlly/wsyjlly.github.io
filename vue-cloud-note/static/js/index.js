/*
* 资源加载完毕执行
* */
window.onload = function () {
	/*
	* 创建富文本编辑器
	* */
	const E1 = window.wangEditor;
	const editor = new E1('#edit-menu','#edit-content');
	editor.create();
	editor.txt.html("<p>欢迎使用 wangEditor 编辑器</p><p>7546456546</p><p><i><strong>57575475475​</strong><strong>​</strong></i><br></p>");
	/*
	* 文件夹点击事件
	* */

	$(".folder-item").each(function () {
		$(this).find("img:eq(0)").click(function () {
			console.log(this);
		});
		$(this).find("p").click(function () {
			$("#current-note-book").html($(this).html());
			$(".note-item3").css("display","none");
			$(".note-item2").css("display","none");
			$(".note-item").css("display","flex");

			console.log(this);
		});
		$(this).find("img:eq(1)").click(function () {
			// console.log(this);
			if ($(this).next().css("display")==="flex") {
				$(this).next().css("display","none");
				$(this).attr('src','./images/left.png');
				return;
			}
			$(this).attr('src','./images/right.png');
			$(this).next().css("display","flex");
			let others = $(".folder-item").find("img:eq(1)").not(this);
			others.attr('src','./images/left.png');
			others.next().css("display","none");

		});
		$(this).find("div>img:eq(0)").click(function () {
			let index = $(this).parent().parent().index();
			let name = $(this).parent().parent().find("p").html();
			// alert(name);
			$("#alert-title").html("修改笔记本名称");
			$("#alert-content>input").val(name);
			$("#alert-content>select").css("display","none");
			$("#alert-content>input").css("display","flex");
			$("#alert-full").css("display","flex");
			console.log();
			console.log(index);
			console.log(this);
			// alert("编辑----"+index);
		});
		$(this).find("div>img:eq(1)").click(function () {
			let index = $(this).parent().parent().index();
			console.log(index);
			console.log(this);
			alert("删除----"+index);
		});

	});
	/*
	* 我的笔记列表项点击事件
	* */
	$(".note-item").each(function () {
		$(this).find("img:eq(0)").click(function () {
			console.log(this);
		});
		$(this).find("p").click(function () {
			$("#title-name").attr("value",$(this).html());
			editor.txt.html($(this).parent().index()+"------------132132132132132323");
			console.log(this);
		});
		$(this).find("img:eq(1)").click(function () {
			// console.log(this);
			if ($(this).next().css("display")==="flex") {
				$(this).next().css("display","none");
				$(this).attr('src','./images/left.png');
				return;
			}
			$(this).attr('src','./images/right.png');
			$(this).next().css("display","flex");
			let others = $(".note-item").find("img:eq(1)").not(this);
			others.attr('src','./images/left.png');
			others.next().css("display","none");
		});
		$(this).find("div>img:eq(0)").click(function () {
			let index = $(this).parent().parent().index();
			console.log(index);
			console.log(this);
			alert("收藏----"+index);
		});
		$(this).find("div>img:eq(1)").click(function () {
			let index = $(this).parent().parent().index();
			$("#alert-title").html("选择要移动到的文件夹");
			$("#alert-content>select").css("display","flex");
			$("#alert-content>input").css("display","none");
			$("#alert-full").css("display","flex");
			console.log(index);
			console.log(this);
			alert("移动----"+index);
		});
		$(this).find("div>img:eq(2)").click(function () {
			let index = $(this).parent().parent().index();
			console.log(index);
			console.log(this);
			alert("删除----"+index);
		});

	});
	/*
	* 回收站笔记列表项点击事件
	* */
	$(".note-item2").each(function () {
		$(this).find("img:eq(0)").click(function () {
			console.log(this);
		});
		$(this).find("p").click(function () {
			$("#title-name").attr("value",$(this).html());
			editor.txt.html($(this).parent().index()+"------------132132132132132323");
			console.log(this);
		});
		$(this).find("img:eq(1)").click(function () {
			// console.log(this);
			if ($(this).next().css("display")==="flex") {
				$(this).next().css("display","none");
				$(this).attr('src','./images/left.png');
				return;
			}
			$(this).attr('src','./images/right.png');
			$(this).next().css("display","flex");
			let others = $(".note-item2").find("img:eq(1)").not(this);
			others.attr('src','./images/left.png');
			others.next().css("display","none");
		});
		$(this).find("div>img:eq(0)").click(function () {
			let index = $(this).parent().parent().index();
			console.log(index);
			console.log(this);
			alert("恢复---"+index);
		});
		$(this).find("div>img:eq(1)").click(function () {
			let index = $(this).parent().parent().index();
			console.log(index);
			console.log(this);
			alert("删除----"+index);
		});

	});
	/*
	* 收藏笔记列表项点击事件
	* */
	$(".note-item3").each(function () {
		$(this).find("img:eq(0)").click(function () {
			console.log(this);
		});
		$(this).find("p").click(function () {
			$("#title-name").attr("value",$(this).html());
			editor.txt.html($(this).parent().index()+"------------132132132132132323");
			console.log(this);
		});
		$(this).find("img:eq(1)").click(function () {
			// console.log(this);
			if ($(this).next().css("display")==="flex") {
				$(this).next().css("display","none");
				$(this).attr('src','./images/left.png');
				return;
			}
			$(this).attr('src','./images/right.png');
			$(this).next().css("display","flex");
			let others = $(".note-item3").find("img:eq(1)").not(this);
			others.attr('src','./images/left.png');
			others.next().css("display","none");
		});
		$(this).find("div>img:eq(0)").click(function () {
			let index = $(this).parent().parent().index();
			console.log(index);
			console.log(this);
			alert("移除----"+index);
		});

	});
	/*
	* 退出登录点击事件
	* */
	$("#logout").click(function () {
		alert("退出");
	});
	/*
	* 添加笔记点击事件
	* */
	$("#first-top>img").click(function () {
		$("#alert-title").html("添加笔记本");
		$("#alert-content>input").val('');
		$("#alert-content>input").attr('placeholder','笔记本名称');
		$("#alert-content>select").css("display","none");
		$("#alert-content>input").css("display","flex");
		$("#alert-full").css("display","flex");
		console.log();
	});
	/*
	* 回收站点击事件
	* */
	$("#first-bottom>div:eq(0)").click(function () {
		$(".note-item3").css("display","none");
		$(".note-item2").css("display","flex");
		$(".note-item").css("display","none");
		alert("回收站");
	});
	/*
	* 收藏点击事件
	* */
	$("#first-bottom>div:eq(1)").click(function () {
		$(".note-item3").css("display","flex");
		$(".note-item2").css("display","none");
		$(".note-item").css("display","none");
		alert("收藏");
	});
	/*
	* 分享点击事件
	* */
	$("#first-bottom>div:eq(2)").click(function () {
		$(".note-item3").css("display","none");
		$(".note-item2").css("display","none");
		$(".note-item").css("display","none");
		alert("分享");
	});
	/*
	* 添加笔记点击事件
	* */
	$("#second-top>img").click(function () {
		$("#alert-title").html("添加笔记");
		$("#alert-content>input").val('');
		$("#alert-content>input").attr('placeholder','笔记标题');
		$("#alert-content>select").css("display","none");
		$("#alert-content>input").css("display","flex");
		$("#alert-full").css("display","flex");
		console.log();
	});
	/*
	* 关闭弹窗事件*/
	$("#close").click(function () {
		$("#alert-full").css("display","none");
		alert("关闭弹窗");
	});
	/*
	* 弹框确认点击事件
	* */
	$("#alert-result>a:eq(0)").click(function () {
		console.log(this);
		$("#alert-full").css("display","none");
		alert($(this).html());
		// $("#alert-content>input").attr('value','');
	});
	/*
	* 弹框取消点击事件
	* */
	$("#alert-result>a:eq(1)").click(function () {
		console.log(this);
		$("#alert-full").css("display", "none");
		alert($(this).html());
		return;
	});
	/*
	* 富文本笔记保存事件
	* */
	$("#save").click(function () {
		alert("save");
	});
	/*$.ajax({
		url:basePath +"note/getAllNoteBook",
		method:"post",
		async : false,
		dataType : "json",

		success:function (data) {


		}
	});*/
}
