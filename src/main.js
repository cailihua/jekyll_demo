import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 开启debug模式
Vue.config.degbug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件
import index from './components/index'
import firstcomponent from './components/firstcomponent'
import secondcomponent from './components/secondcomponent'

// 创建一个路由器实例子
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path:'/',
			component: index
		},
		{
			path: '/first',
			component: firstcomponent
		},
		{
			path: '/second',
			component: secondcomponent
		}
	]
})

const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
