import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('../views/MyPage.vue'),
    alias:"/test1",
    beforeEnter: (to, from, next) => {
      console.log(to,from);
      next()
    }
  },
  {
    path: '/parentpage',
    name: 'ParentPage',
    component: () => import('../views/test_page/parentPage.vue'),
    children:[
      {
        path: '/parentpage/child1/:username',
        name: 'child1',
        component: () => import('../views/test_page/ChildPage1.vue') 
      },
      {
        path: '/parentpage/child2',
        name: 'child2',
        component: () => import('../views/test_page/ChildPage2.vue') 
      }
    ]
  },
  {
    path: '/home',
    redirect:'/'
  },
  {
    path: '/gochild1/:username',
    redirect:'/parentpage/child1/:username'
  },
  {
    path: '*',
    component:()=>import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
