import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import UserView from '@/views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'HomeView', // Add the catch-all route
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/sign-in');
      return;
    }
  }
  next();
})


export default router
