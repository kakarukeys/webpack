import VueRouter from 'vue-router'
import Home from './components/Home'
import Project from './components/Project'

export default new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects/:projectName', name: 'project', component: Project }
  ]
})
