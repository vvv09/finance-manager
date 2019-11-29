import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import dateFilter from '@/filters/date.filter'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
