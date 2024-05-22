
import router from "./router"
// 引入仓库
import { useInfoStore } from "@/stores/useUserInfo"
const whiteList = ['/login'] // 不重定向白名单
// 路由鉴权
router.beforeEach((to, form, next) => {
    const { token } = useInfoStore()
    // 判断去的路径是否在白名单中 不包含的话判断token是否存在
    if (whiteList.includes(to.path)) {
        if (token) {
            next(form.path)
        } else {
            next()
        }
    } else {
        if (token) {
            next()
        } else {
            next('/login')
        }

    }
})