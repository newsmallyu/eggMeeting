import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import axios from 'axios'

Vue.use(ElementUI, { locale })
axios.defaults.baseURL="/"
new Vue({
  el: '#app',
  render: h => h(App)
})
