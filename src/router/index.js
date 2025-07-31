import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'
import Layout from '../components/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/home', 
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'about',
        component: About,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;