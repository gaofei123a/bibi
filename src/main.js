import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
// 注册一个全局自定义指令 `v-focus`
Vue.directive('document-click', {
  // 当被绑定的元素插入到 DOM 中时……
  // inserted: function (el) {
  //   // 聚焦元素
  //   // el.focus()
  // }
  bind(el,binding,vnode){
    // console.log('---',el,binding,vnode)
    document.addEventListener('click',binding.value,false);
  },
  inserted(){
    console.log('insert')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
