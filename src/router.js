import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Items from '@/views/Items'
import About from '@/views/About'
import Error from '@/views/Error'

Vue.use(Router) //instalar plugins o utilidades que tiene la libreria

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/items',
            name:'Items',
            component:Items
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