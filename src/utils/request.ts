
// 对axios进行二次封装
import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig, type Method } from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
import { useInfoStore } from "@/stores/useUserInfo"


// 创建axios实例
const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 5000,
})

// 请求拦截
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const {token} = useInfoStore()
    if(token){
        config.headers!.Authorization = `Bearer ${token}`
    }
    ElLoading.service({ fullscreen: true,text:"疯狂加载中……" })
    return config
}, (error: AxiosError) => {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use((response: AxiosResponse) => {
    ElLoading.service({ fullscreen: true,text:"疯狂加载中……" }).close()
    return response.data
}, (error: AxiosError) => {
    let message = ""
    let status = error.response!.status
    switch (status) {
        case 401:
            message = "TOKEN过期"
            break;
        case 403:
            message = "没有权限"
            break;
        case 404:
            message = "请求路径错误"
            break;
        default:
            message = "网络异常"
            break;
    }
    ElMessage.error(message)
    return Promise.reject(error)
})



const request = <T=any>(url:string,method:Method="GET",data:Object= {},options?:AxiosRequestConfig)=>{
    return service.request<T>({
        url,
        method,
        [method === "GET" ? "params" : "data"]:data,
        ...options
    })
}

export default request