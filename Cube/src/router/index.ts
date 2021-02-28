import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Profil from '../views/profil/Profil.vue'
import Login from '../views/profil/Login.vue'
import SignUp from '../views/profil/Signup.vue'
import AddRessource from '../views/ressources/AddRessource.vue'
import EditRessource from '../views/ressources/EditRessource.vue'
import AddCategories from '../views/categories/AddCategories.vue'
import Categories from '../views/categories/Categories.vue'
import EditCategories from '../views/categories/EditCategorie.vue'
import TypeDeRessource from '../views/TypeDeRessource/Typederessource.vue'
import AddTypeDeRessource from '../views/TypeDeRessource/AddTypederessource.vue'
import EditTypeDeRessource from '../views/TypeDeRessource/EditTypeOfRessource.vue'
import Settings from '../views/profil/Settings.vue'
import DetailRessource from '../views/ressources/DetailRessource.vue'
import { store } from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home ,
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
    component: Profil,
    beforeEnter: (to, from, next) => {
        if(store.state.role >= 1){
          next()
        }else{
          next('/home')
        }
        
    }
  },
  {
    path: '/profil/settings',
    name: 'Profil Settings',
    component: Settings,
    beforeEnter: (to, from, next) => {
        if(store.state.token != ""){
          next()
        }else{
          next('/home')
        }
        
    }
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
  {
    path: '/profil/ressource/add',
    name: 'Profil Ressource Add',
    component: AddRessource,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 1){
        next()
      }else{
        next('/home')
      }
      
    }
  },
  {
    path: '/profil/ressource/:id',
    name: 'Profil Ressource Detail',
    props: true,
    component: DetailRessource
  },
  {
    path: '/profil/ressource/edit/:id',
    name: 'Profil Ressource Edit',
    props: true,
    component: EditRessource,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 1){
        next()
      }else{
        next('/home')
      }
      
  }
  },
  {
    path: '/profil/categories/add',
    name: 'Profil Categories Add',
    component: AddCategories,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 2){
        next()
      }else{
        next('/home')
      }
      
  }
  },
  {
    path: '/profil/categories',
    name: 'Profil Categories',
    component: Categories,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 2){
        next()
      }else{
        next('/home')
      }
      
  }
  },
  {
    path: '/profil/categories/edit/:id',
    name: 'Profil Categories Edit',
    props: true,
    component: EditCategories,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 2){
        next()
      }else{
        next('/home')
      }
      
  }
  },
  {
    path: '/profil/typeressource',
    name: 'Profil typeressource',
    component: TypeDeRessource,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 2){
        next()
      }else{
        next('/home')
      }
      
  }
  },
  {
    path: '/profil/typeressource/add',
    name: 'Profil Type De Ressource Add',
    component: AddTypeDeRessource,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 2){
        next()
      }else{
        next('/home')
      }
      
  }
  },
  {
    path: '/profil/typeressource/edit/:id',
    name: 'Profil Type De Ressource Edit',
    props: true,
    component: EditTypeDeRessource,
    beforeEnter: (to, from, next) => {
      if(store.state.role >= 2){
        next()
      }else{
        next('/home')
      }
      
  }
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
