import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('@/views/Login.vue')
	},
	{
		path: '/bus',
		component: () => import('@/views/Bus.vue')
	},
	{
		path: '/create-bus',
		component: () => import('@/views/CreateBus.vue')
	},
	{
		path: '/edit-bus/:id',
		component: () => import('@/views/EditBus.vue')
	},
	{
		path: '/driver',
		component: () => import('@/views/Driver.vue')
	},
	{
		path: '/create-driver',
		component: () => import('@/views/CreateDriver.vue')
	},
	{
		path: '/edit-driver/:id',
		component: () => import('@/views/EditDriver.vue')
	},
	{
		path: '/order',
		component: () => import('@/views/Order.vue')
	},
	{
		path: '/create-order',
		component: () => import('@/views/CreateOrder.vue')
	}
]

const router = new VueRouter({
	routes, 
	mode: 'history'
})

export default router