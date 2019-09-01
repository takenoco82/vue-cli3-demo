import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Private from './views/Private.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/private',
      name: 'private',
      component: Private,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

// [ルートメタフィールド | Vue Router](https://router.vuejs.org/ja/guide/advanced/meta.html)
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isLogin = Boolean(sessionStorage.getItem("isLogin"));
    console.log(`isLogin=${isLogin}, ${typeof isLogin}`);

    if (!isLogin) {
      next("login")
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
