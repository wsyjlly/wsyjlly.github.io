(function () {
	Vue.component('app',{
		template:'<div class="container"><div class="topBar">这个地方在渲染后不会被占用</div><slot></slot></div>'
	});
	Vue.component('app-header',{
		template:'<div class="header" slot="header">this is header</div>'
	});
	Vue.component('app-content',{
		template:'<div class="content">this is content</div>'
	});
	Vue.component('app-footer',{
		template:'<div class="footer">this is footer</div>'
	});
	var myApp=new Vue({
		el:'#myApp'
	});
})()