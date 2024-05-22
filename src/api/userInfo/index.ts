
import request from "@/utils/request";
import type { LoginParamsType, MenuResponseType, UserInfoResponseType } from "./types";

// 登录
export const LoginApi = (data:LoginParamsType)=> request("/user/login","POST",data)

// 首页获取左侧菜单
export const getMenuListApi = () => request<MenuResponseType>("/user/menus")

// 获取用户信息
export const  getUserInfoApi = () => request<UserInfoResponseType>("/user/info")