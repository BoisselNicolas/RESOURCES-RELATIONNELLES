import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Profil from '../views/profil/Profil.vue'
import HomeUser from '../views/profil/homeUser.vue'
import Login from '../views/profil/Login.vue'
import SignUp from '../views/profil/Signup.vue'
import AddRessource from '../views/ressources/AddRessource.vue'
import HomeRessource from '../views/ressources/Ressource.vue'
import EditRessource from '../views/ressources/EditRessource.vue'
import AddCategories from '../views/categories/AddCategories.vue'
import Categories from '../views/categories/Categories.vue'
import EditCategories from '../views/categories/EditCategorie.vue'
import TypeDeRessource from '../views/TypeDeRessource/Typederessource.vue'
import AddTypeDeRessource from '../views/TypeDeRessource/AddTypederessource.vue'
import EditTypeDeRessource from '../views/TypeDeRessource/EditTypeOfRessource.vue'
import Settings from '../views/profil/Settings.vue'
import DetailRessource from '../views/ressources/DetailRessource.vue'
import Favories from '../views/profil/Fav.vue'
import { store } from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/ressource'
  },
  {
    path: '/home',
    redirect: '/ressource'
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    beforeEnter: (to, from, next) => {
      if (store.state.role >= 1) {
        next()
      } else {
        next('/home')
      }
    },
    children:[
      {
        path: '',
        name: 'Home User',
        component: HomeUser,
      },
      {
        path: 'ressource/edit/:id',
        name: 'Profil Ressource Edit',
        props: true,
        component: EditRessource,
      },
      {
        path: 'ressource/add',
        name: 'Profil Ressource Add',
        component: AddRessource,
        
      },
      {
        path: 'settings',
        name: 'Profil Settings',
        component: Settings,
        
      },
      {
        path: 'fav',
        name: 'Profil Fav',
        component: Favories,
        
      },
      {
        path: 'categories/add',
        name: 'Profil Categories Add',
        component: AddCategories,
        beforeEnter: (to, from, next) => {
          if (store.state.role >= 2) {
            next()
          } else {
            next('/home')
          }
    
        }
      },
      {
        path: 'categories',
        name: 'Profil Categories',
        component: Categories,
        beforeEnter: (to, from, next) => {
          if (store.state.role >= 2) {
            next()
          } else {
            next('/home')
          }
    
        }
      },
      {
        path: 'categories/edit/:id',
        name: 'Profil Categories Edit',
        props: true,
        component: EditCategories,
        beforeEnter: (to, from, next) => {
          if (store.state.role >= 2) {
            next()
          } else {
            next('/home')
          }
    
        }
      },
      {
        path: 'typeressource',
        name: 'Profil typeressource',
        component: TypeDeRessource,
        beforeEnter: (to, from, next) => {
          if (store.state.role >= 2) {
            next()
          } else {
            next('/home')
          }
    
        }
      },
      {
        path: 'typeressource/add',
        name: 'Profil Type De Ressource Add',
        component: AddTypeDeRessource,
        beforeEnter: (to, from, next) => {
          if (store.state.role >= 2) {
            next()
          } else {
            next('/home')
          }
    
        }
      },
      {
        path: 'typeressource/edit/:id',
        name: 'Profil Type De Ressource Edit',
        props: true,
        component: EditTypeDeRessource,
        beforeEnter: (to, from, next) => {
          if (store.state.role >= 2) {
            next()
          } else {
            next('/home')
          }
    
        }
      },
    ]
  },
  {
    path: '/ressource',
    name:'Home Ressource',
    component: HomeRessource ,
    children:[
      {
        path: '',
        name: 'Ressource Home',
        props: true,
        component: Home
      },
      {
        path: ':id',
        name: 'Ressource Detail',
        props: true,
        component: DetailRessource
      },
      
    ]
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
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
