import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Profil from '../views/profil/Profil.vue'
import Login from '../views/profil/Login.vue'
import SignUp from '../views/profil/Signup.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home 
  },
/*  {
    path: '/ressource/search',
    name: 'Ressource Search',
    component: Home
  },
  {
    path: '/ressource/details',
    name: 'Ressource Details',
    component: Home
  },
  {
    path: '/ressource/comments',
    name: 'Ressource comments',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Home
  },
  {
    path: '/ressource/edit',
    name: 'Ressource Edit',
    component: Home
  },
  {
    path: '/ressource/validation',
    name: 'Ressource Validation',
    component: Home
  }, */
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
 {
    path: '/profil/login',
    name: 'Profil Login',
    component: Login
  },
  {
    path: '/profil/signup',
    name: 'Profil SignUp',
    component: SignUp
  },
  /*  {
    path: '/profil/password/new',
    name: 'Profil New Password',
    component: Home
  },
  {
    path: '/profil/ressource',
    name: 'Profil Ressource',
    component: Home
  },
  
  {
    path: '/profil/ressource/exploited',
    name: 'Ressource Exploited',
    component: Home
  },
  {
    path: '/profil/ressource/waiting',
    name: 'Ressource Waiting',
    component: Home
  },
  {
    path: '/profil/ressource/favorites',
    name: 'Ressource Favorites',
    component: Home
  },
  {
    path: '/profil/account',
    name: 'Account',
    component: Home
  },
  {
    path: '/profil/settings',
    name: 'Edit',
    component: Home
  },
  {
    path: '/profil/dashboard',
    name: 'Dashboard',
    component: Home
  },  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
