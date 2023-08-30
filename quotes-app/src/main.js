import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from ".//view/pages/MainPage/HelloWorld.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { Vue } from "vue";
import {
  BIconWindowSidebar,
  BootstrapVue,
  BootstrapVueIcons,
} from "bootstrap-vue";
import axios from "axios";

let Api = axios.create({
  baseURL: "https://dev.to/api",
});

window.Api = Api;

const routes = [
  {
    path: "/",
    component: HelloWorld,
    name: "Home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
