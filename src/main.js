import './assets/main.css'
// 引入tailwind css框架
import '@/style/tailwind.less'
import { createApp } from 'vue'
import pinia from '@/stores/index.js'

import App from './App.vue'
import router from './router'
// 按需引入element-plus
import setupElementPlus from './plugins/element-plus'

const app = createApp(App)

app.use(router)
app.use(pinia)

// 按需引入element-plus 使用的组件
setupElementPlus(app)

app.mount('#app')
