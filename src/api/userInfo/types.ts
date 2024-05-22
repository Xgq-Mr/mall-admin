
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


// 获取菜单响应参数
// export type Request = {
//     code: number;
//     data: Datum[];
//     msg: string;
//     [property: string]: any;
// }

export type MenuResponseType = {
    children: Child[];
    component: string;
    icon: string;
    id: number;
    isParent: boolean;
    link: string;
    menuname: string;
    parentid: number;
    [property: string]: any;
}

export type Child = {
    component: string;
    icon: string;
    id: number;
    isParent: boolean;
    link: string;
    menuname: string;
    parentid: number;
    [property: string]: any;
}


// 获取用户信息响应参数
// export type Request = {
//     code: number;
//     data: Data;
//     msg: string;
//     [property: string]: any;
// }
export type UserInfoResponseType = {
    age: number;
    createdAt: string;
    deviceid: string;
    gender: number;
    grade: string;
    id: number;
    num: number;
    phone: string;
    province: string;
    role: Role;
    school: string;
    status: number;
    type: number;
    updatedAt: string;
    username: string;
    [property: string]: any;
}

export type Role = {
    createdAt: string;
    id: number;
    remark: string;
    rolename: string;
    updatedAt: string;
    [property: string]: any;
}
