import Vue from 'vue'
import App from './App.vue'
import "normalize.css/normalize.css"

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import VueRouter from "vue-router"
import "./css/global.css"

import Home from './page/Home'

import Product from "./page/Product"
import Login from "./page/Login"
import Signup from "./page/Signup"
import Recover from "./page/Recover"


import Setting from "./page/Setting"
import My from "./page/My"

import Cart from "./page/Cart"
import Order from "./page/Order"


import Search from './page/Search'

import AdminBase from './page/admin/Base';
import AdminUser from './page/admin/User';
import AdminBrand from './page/admin/Brand';
import AdminCat from './page/admin/Cat';
import AdminProduct from './page/admin/Product';



import api from './lib/api';
import session from './lib/session';




Vue.use(ElementUI);
Vue.use(VueRouter);
let router = new VueRouter({
  routes: [{
      path: '/',
      component: Home,
    },
    {
      path: '/product/:id',
      component: Product,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: '/recover',
      component: Recover,
    },
    {
      path: "/signup",
      component: Signup,
    },
    {
      path: "/my",
      component: My,
      children: [{
          path: 'cart',
          component: Cart,
        },
        {
          path: 'order',
          component: Order,
        },
        {
          path: 'setting',
          component: Setting,
        },
      ]
    },
    {
      path: '/base',
      component: AdminBase,
      children: [{
        path: 'user',
        component: AdminUser
      }]
    },
    {
      path: '/admin',
      component: AdminBase,
      children: [
        {
          path: 'user',
          component: AdminUser,
        },
        {
          path: 'brand',
          component: AdminBrand,
        },
        {
          path: 'cat',
          component: AdminCat,
        },
        {
          path: 'product',
          component: AdminProduct,
        },
      ]
    }


  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  let toAdmin = to.matched[0].path == '/admin';
  let isAdmin = session.isAdmin();

  if(toAdmin && !isAdmin)
    return;

  next();
});

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')