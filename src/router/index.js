import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue"; 
import Contact from "@/views/Contact.vue"; 
import Music from "@/views/Music.vue"; 
import Conserts from "@/views/Conserts.vue"; 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/music",
    name: "music",
    component: Music
  },
  {
    path: "/conserts",
    name: "conserts",
    component: Conserts
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
