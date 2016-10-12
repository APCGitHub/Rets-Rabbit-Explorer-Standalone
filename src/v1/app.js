import Routes from './routes';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.debug = true;

const router = new VueRouter({
  	routes: Routes
});

const App = new Vue({
	router: router
}).$mount('#v1-explorer');