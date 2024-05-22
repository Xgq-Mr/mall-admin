
import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import "./permission"
// 引入pinia仓库
import piniaStore from "@/stores/index"

// 引入全局ElementPlus以及Icon的封装
import  setRegisterGlobal from "@/global"
// 挂载全局样式
import "@/styles/index.scss"
const app = createApp(App)
app.use(setRegisterGlobal)
app.use(router)
app.use(piniaStore)

app.mount('#app')
