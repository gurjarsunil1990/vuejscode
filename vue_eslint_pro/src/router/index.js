import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyWorld from '@/components/MyWorld'
import MyFirst from '@/components/MyFirst'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Myworld',
      component: MyWorld
    },
    {
      path: '/MyFirst',
      name: 'MyFirst',
      component: MyFirst
    }
  ]
})
