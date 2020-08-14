import Vue from 'vue'
import Router from 'vue-router'
import Articulos from '@/views/Articulos'
import About from '@/views/About'
import Error from '@/views/Error'

Vue.use(Router) //instalar plugins o utilidades que tiene la libreria

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/articulos',
            name:'Articulos',
            component:Articulos
        },
        {
            path:'/about',
            name:'About',
            component:About
        },
        {
            path:'*',
            name:'Error',
            component:Error
        }
    ]
})