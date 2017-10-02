import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from '@/components/Welcome.vue';
import List from '@/components/List.vue';
import Sidebar from '@/components/Sidebar.vue';
import EmptyEmailList from '@/components/EmptyEmailList.vue';
import MainWindow from '@/components/MainWindow.vue';
import LoginView from '@/components/LoginView.vue';

Vue.use(VueRouter);

// Cast to any to fix type checking issue with 'component' declaration.
// Argument of type '{ routes: { name: string; path: string; component: "string" | "number" | "boolean" | "symbol" | "...' is not assignable to parameter of type 'RouterOptions'.
const routes = [
	{
		name: 'login',
		path: '/login',
		meta: {
			title: 'Login to Demo Email'
		},
		components: {
			main: LoginView
		}
	},
	{
		name: 'welcome',
		path: '/',
		components: {
			sidebar: Sidebar,
			main: MainWindow
		},
		children: [
			{
				path: '',
				meta: {
					title: 'Welcome to the Vue Demo',
					isRequireAuth: true
				},
				components: {
					emailList: List,
					emailContent: EmptyEmailList
				}
			},
			{
				path: '/user/:id',
				components: {
					emailList: Sidebar,
					emailContent: List
				},
				props: {
					emailContent: true
				}
			}
		]
	}
];

const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next) => {
	if (to.meta.isRequireAuth && !JSON.parse(localStorage.getItem('IS_AUTHENTICATED'))) {
		next('login');
	} else {
		next();
	}
});

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});

export default router;