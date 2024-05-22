
import type { App } from "vue"
// 引入全局样式
import ElementPlus from "./registerElementPlus"
import ElementPlusIcon from "./registerElementPlusIcon"

// 导出实例
export default {
    install(app:App){
        app.use(ElementPlus)
        app.use(ElementPlusIcon)
    }
}