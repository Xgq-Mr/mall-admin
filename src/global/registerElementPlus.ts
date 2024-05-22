

// 引入ElementPlus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import type { App } from "vue"

// 导出注册
export default {
    install(app:App){
        app.use(ElementPlus)
    }
}