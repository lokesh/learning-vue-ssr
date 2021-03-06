import Vue from 'vue'
import Router from 'vue-router'
import Foo from './components/Foo';
import Bar from './components/Bar';


Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
	  { path: '*', component: Foo },
	  { path: '/bar', component: Bar }
    ]
  })
}