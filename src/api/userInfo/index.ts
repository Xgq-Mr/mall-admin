
import request from "@/utils/request";
import type { LoginParamsType, LoginResponseType } from "./types";

// 登录
export const LoginApi = (data:LoginParamsType)=> request("/user/login","POST",data)