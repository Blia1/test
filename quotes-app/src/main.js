import { createApp } from "vue"
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Quotes from "./components/Quotes.vue"
import HelloWorld from "./components/HelloWorld.vue"
import Authors from "./components/Authors.vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Vue } from 'vue'
import { BIconWindowSidebar, BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import axios from "axios";

let Api = axios.create({
    baseURL: 'https://api.fisenko.net/v1',
})
Api.defaults.withCredentials = true

window.Api = Api

const routes = [
    {
        path: '/',
        component: HelloWorld,
        name: 'Home',
    },
    {
        path: '/quotes',
        component: Quotes,
        name: 'quotesPage',
    },
    {
        path: '/authors',
        component: Authors,
        name: 'authorsPage',
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})



createApp(App).use(router).mount('#app')
