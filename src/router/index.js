import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/public/Home.vue';
import Cart from '../views/public/Cart.vue';
import ItemInfo from '../views/public/ItemInfo.vue';
import NotFound from '../views/public/NotFound.vue';
import OrderForm from '../views/public/OrderForm.vue';
import Success from '../views/public/Success.vue';
import Failed from '../views/public/Failed.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/kosik',
		name: 'Cart',
		component: Cart,
	},
	{
		path: '/kosik/formular',
		name: 'OrderForm',
		component: OrderForm,
	},
	{
		path: '/kosik/formular/odeslano',
		name: 'Success',
		component: Success,
	},
	{
		path: '/kosik/formular/error',
		name: 'Failed',
		component: Failed,
	},
	{
		path: '/polozky',
		name: 'Items',
		component: Home,
	},
	{
		path: '/polozky/:_id',
		name: 'ItemInfo',
		component: ItemInfo,
		props: true,
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
