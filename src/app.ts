import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from '@/App.vue';
import router from '@/routes';
import store from '@/store';

Vue.use(VeeValidate);

require('./imports-resolve.ts');

new Vue({
	el: '#app',
	router,
	store,
	render: (h: any) => h(App)
});
