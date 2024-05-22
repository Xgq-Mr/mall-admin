
// 登录请求参数
export type LoginParamsType = {
    password: string;
    username: string;
}

/**
 * 登录响应参数
 */
export type LoginResponseType = {
    code: number;
    data: string;
    msg: string;
    [property: string]: any;
}
