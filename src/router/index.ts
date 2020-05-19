import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/ButtonView.vue'),
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('../views/GridView.vue'),
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../views/ModalView.vue'),
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: () => import('../views/CarouselView.vue'),
  },
  {
    path: '/dataTable',
    name: 'DataTable',
    component: () => import('../views/DataTableView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
