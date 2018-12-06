import App from '../app-vue/app.vue'
import Vue from 'vue'

console.log("main.js");
new Vue({
		el: '#project',		
		render: h => h(App)
	});
