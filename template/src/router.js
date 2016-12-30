import _ from 'underscore'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Project from './components/Project'

let router = new VueRouter({
  routes: [
    {path: '/', name: 'home', component: Home, meta: {title: 'Home'}},
    {path: '/projects/:projectName', name: 'project', component: Project, meta: {title: 'Project - <%= projectName %>'}}
  ]
})

router.afterEach(route => {
  document.title = _.template(route.meta.title)(route.params) + ' - Glorified Todo App'
})

export default router
