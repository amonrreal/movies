import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/movie/',
    name: 'MovieDetail',
    component: () =>
      import(/* webpackChunkName: "leader-board" */ '@/views/MovieDetail.vue'),
    children: [
      {
        path: ':id',
        name: 'Movie',
        component: () =>
          import(
            /* webpackChunkName: "leader-board" */ '@/components/Movie.vue'
          ),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
