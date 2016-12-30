import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#if_eq build "runtime"}}
  render: h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<app/>',
  components: { App },
  {{/if_eq}}
  router
})
