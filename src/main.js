import Vue from 'vue'
import App from './components/App.vue'

import store from './store/index'

import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 1. Define route components.
// These can be imported from other files
const home = {
  template: '<div>app</div>'
 }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/:addrPrivateKey', component: home }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  store,
  router,
  BootstrapVue
}).$mount('#app')
