import Vue from 'vue'
import App from './App.vue'
import './quasar'

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

new Vue({
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app')
