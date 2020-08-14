import Vue from 'vue' //importa npm
import App from './App.vue' //importa app.vue
import "@/assets/css/tailwind.css" //@ hace referencia a src de manera relativa
import router from '@/router'

Vue.config.productionTip = false

//corresponde a la configuracion el, data 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
