(function () {
	Vue.component("main_left",{
		template: "<div id=\"main_left\" class=\"b_color c-n-fs-fs\" :style=\"{width:main_left_width+'px',height:main_height+'px'}\"></div>"
	});
	Vue.component("logo",{
		template: "<div id=\"logo\" class=\"r-n-c-c b_color\" :style=\"{width:main_left_width+'px'}\">\n" +
		"                        <img src=\"images/logo.png\">\n" +
		"                        <div id=\"logo_text\" :style=\"{display:main_left_width==150?'block':'none'}\">云预约</div>\n" +
		"</div>"
	});
	Vue.component("primary_menu",{
		template: "<div id=\"primary_menu\" class=\"c-n-fs-c\" :style=\"{width:main_left_width+'px'}\">\n" +
		"                        <div class=\"primary_item r-n-fs-c\"\n" +
		"                             @click=\"primary_menu_click(index)\"\n" +
		"                             v-for=\"(item, index) in primary_array\"\n" +
		"                             :key=\"index\"\n" +
		"                             :style=\"{width:main_left_width+'px',background:item.selected ? 'rgb(190,194,201)':'',color:item.selected ? '#252A2F':''}\">\n" +
		"                                <img :src=\"item.selected ? item.src2:item.src1\"/>\n" +
		"                                <div class=\"primary_item_text\" :style=\"{display:main_left_width==150?'block':'none'}\">{{item.name}}</div>\n" +
		"                        </div>\n" +
		"                </div>"
	});
	Vue.component("stretch",{
		template: "<div id=\"circle\" class=\"r-n-c-c\" @click=\"details_click\" :style=\"{display:main_left_width==150?'none':'block'}\"><img src=\"images/circle.png\"/></div>\n" +
		"                <div id=\"simple\" class=\"r-n-c-c\" @click=\"simple_click\" :style=\"{display:main_left_width==150?'block':'none'}\"><img src=\"images/circleb.png\"/></div>"
	});

	Vue.component("main_right",{
		template: "<div id=\"main_right\" style=\"background:#9acfea;\" :style=\"{width : main_right_width+'px',height : main_height+'px'}\"></div>"
	});
	Vue.component("nav_menu",{
		template: "<div id=\"nav_menu\" class=\"r-n-sb-c b_color\" :style=\"{width : main_right_width+'px'}\"></div>"
	});
	Vue.component("secondary_menu",{
		template: "<div id=\"secondary_menu\" class=\"r-n-fs-c\">\n" +
		"                                <div class=\"secondary_item\"\n" +
		"                                     @click=\"secondary_item_click(index)\"\n" +
		"                                     v-for=\"(item,index) in secondary_array[current_primary]\"\n" +
		"                                     :key=\"index\"\n" +
		"                                     :style=\"{background:item.selected ?'rgb(190,194,201)':'',color:item.selected ? '#252A2F':''}\">{{item.name}}</div>\n" +
		"                        </div>"
	});
	Vue.component("login",{
		template: "<div id=\"login\">\n" +
		"                                <div id=\"login_logo\" @click=\"login_logo_click\" @mouseleave=\"login_logo_mouseleave\" class=\"r-n-c-c\">\n" +
		"                                        <img src=\"images/login_logo.png\" alt=\"\">\n" +
		"                                        <div id=\"login_content\" :style=\"{display:login_content_show?'block':'none'}\">\n" +
		"                                                <div id=\"login_name\" class=\"login_item r-n-fs-c\"><img src=\"images/circle.png\" alt=\"\">简单点</div>\n" +
		"                                                <div id=\"setting\" class=\"login_item r-n-fs-c\"><img src=\"images/primary_6.png\" alt=\"\">账号设置</div>\n" +
		"                                                <div id=\"login_out\" class=\"login_item r-n-fs-c\"><img src=\"images/back.png\" alt=\"\">退出登录</div>\n" +
		"                                        </div>\n" +
		"                                </div>\n" +
		"                        </div>"
	});
	Vue.component("content",{
		template: "<div id=\"content\" class=\"r-n-c-c\" style=\"background:#1b6d85;\" :style=\"{width : main_right_width+'px',height : main_bottom_height+'px'}\">\n" +
		"                        <div id=\"content_inner\" class=\"r-n-fs-c\">\n" +
		"\n" +
		"                        </div>\n" +
		"                </div>"
	});

	// const root=new Vue({
	// 	el:'#root'
	// });

})();