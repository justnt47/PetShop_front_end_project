import { onMounted } from "vue";
import { createRouter, createWebHistory, useRouter } from 'vue-router';
import Login from '../components/Login/LoginLayout.vue';
import HomePage from '../components/HomePage.vue';
import MainLayout from "../MainLayout.vue";

const routes = [
  // {
  //   path: '/',
  //   redirect: { name: 'HelloWorld' } // Redirect to the "Home" page by default
  // },
  // { 
  //   path: '/login',
  //   name:'Login',
  //   component: Login 
  // },
  // { 
  //   path: '/',
  //   name:'HelloWorld',
  //   component: HelloWorld 
  // },
  {
    path: "/",
    component: MainLayout, // Main layout for all routes except login
    redirect: "/",
    children: [
      { 
        path: '/',
        name:'HomePage',
        component: HomePage 
      },
      
    ]
  },
  { 
    path: '/login',
    name:'Login',
    component: Login 
  },


];


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router