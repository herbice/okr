import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/day01/HelloVue'
import doubanVue from '@/components/day01/doubanVue'
import elementVue from '@/elementVue'
import mainMenu from '@/components/mainMenu'
import projectList from '@/components/projectList'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/dd',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day01',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/douban',
      name: 'doubanVue',
      component: doubanVue
    },

    {
      path: '/11',
      name: 'elementVue',
      component: elementVue
    }
    ,
    {
      path: '/',
      name: 'mainMenu',
      component: mainMenu
    },
    {
      path: '/projectList',
      name: 'projectList',
      component: projectList
    },



  ]
})
