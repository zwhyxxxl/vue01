import Vue from 'vue'//引入vue对象 类似于<script src="vue.js"><script>
import App from './App.vue'//App.vue文件对象引入过来(vue项目页面入口)

Vue.config.productionTip = false//控制台有一句提示消息


new Vue({//开始实例化vue
  render: h => h(App),//准备渲染App页面
}).$mount('#app')//渲染到index.html文件里面id叫app的标签上
