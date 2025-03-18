import { onMounted } from "vue";
import { createRouter, createWebHistory, useRouter } from 'vue-router';

import Login from '../page/Login/page.vue';
import HomePage from '../page/Home/page.vue';
import ProductPage from '../page/Product/page.vue';
import ProductDetailPage from '../page/Product/ProductDetail/page.vue';
import CartPage from '../page/Cart/page.vue';
import ProfilePage from '../components/Settings/ProfilePage.vue';
import ChangePwdPage from '../components/Settings/FormChangePwd.vue';
import MangeProductPage from '../components/Settings/MangeProductPage.vue';
import AddProductPage from '../components/Settings/AddProductPage.vue';
import SettingsPage from '../page/Settings/page.vue';
import MainLayout from "../MainLayout.vue";
import NotFound from "../page/NotFound.vue";
import CartHistory from "@/components/Settings/CartHistory.vue";

const routes = [

  {
    path: "/",
    component: MainLayout, 
    redirect: "/",
    children: [
      { 
        path: '/',
        name:'HomePage',
        component: HomePage 
      },
      { 
        path: '/Products',
        name:'ProductPage',
        component: ProductPage 
      },
      { 
        path: '/Products/Detail/:id',
        name:'ProductDetailPage',
        component: ProductDetailPage ,
        props: true
      },
      { 
        path: '/Cart',
        name:'CartPage',
        component: CartPage 
      },
      { 
        path: '/Settings',
        name:'SettingsPage',
        component: SettingsPage,
        children: [
          { 
            path: '/Settings/Profile',
            name:'ProfilePage',
            component: ProfilePage 
          },
          { 
            path: '/Settings/Change-Password',
            name:'ChangePwdPage',
            component: ChangePwdPage 
          },
          { 
            path: '/Settings/Mange-Product',
            name:'MangeProductPage',
            component: MangeProductPage 
          },
          {
            path: '/Settings/Cart-History',
            name:'CartHistory',
            component: CartHistory},
          { 
            path: '/Settings/Add-Product',
            name:'AddProductPage',
            component: AddProductPage 
          },
        ]
      },
      { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound 
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