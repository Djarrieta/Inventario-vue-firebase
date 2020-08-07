import Vue from 'vue' //importa npm
import App from './App.vue' //importa app.vue
import "@/assets/css/tailwind.css" //@ hace referencia a src de manera relativa

Vue.config.productionTip = false

//corresponde a la configuracion el, data 
new Vue({
  render: h => h(App),
}).$mount('#app')
