import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// [Vue.config.errorHandlerはどこで発生したエラーをキャプチャできるのか - Qiita](https://qiita.com/clomie/items/73fa1e9f61e5b88826bc)
Vue.config.errorHandler = (err, vm, info) => {
  console.log(`Captured in Vue.config.errorHandler: ${info}`, err);
  if (err.name === "UnauthorizedError") {
    router.push("login");
  } else {
    router.push("error");
  }
};

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
