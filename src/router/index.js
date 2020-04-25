import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import defaultpage from '@/layout/default.vue'
import blankpage from '@/layout/blank.vue'
import Index from '@/page/index'
import ChangeCity from '@/page/changecity'
import goodslist from '@/page/goodslist'
import Login from '@/page/login'
import Register from '@/page/register' 
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'/default',
    component:defaultpage,
    redirect:'/index',
    children:[
      {
        path:'s/:name',
        name:'goods',
        component:goodslist
      },{
        path:'index',
        name:'index',
        component:Index
      },
      {
        path:'changecity',
        name:'changecity',
        component:ChangeCity
      }
      
    ]
  },
  {
    path:'/blank',
    name:'blank',
    component:blankpage,
    children:[
      {
        path:'login',
        name:'login',
        component:Login
      },{
        path:'register',
        name:'register',
        component:Register
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
