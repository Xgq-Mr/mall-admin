import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path:"/login",
    name:"Login",
    component:()=>import("@/views/Login/index.vue")
  },
  {
    path:"/",
    name:"Home",
    component:()=>import("@/layout/index.vue"),
    meta:{title:"首页"},
    redirect:"/dashboard/home",
    children:[
      {path:"/dashboard/home",name:"DashboardHome",component:()=>import("@/views/dashboard.vue"),meta:{title:"面板",path:"/dashboard/home"}},
      {path:"/permission",name:"Permission",meta:{title:"权限管理"},children:[
        {path:"/permission/user",name:"PermissionUser",meta:{title:"用户管理",path:"/permission/user"},component:()=>import("@/views/Permission/User/index.vue")},
        {path:"/permission/role",name:"PermissionRole",meta:{title:"角色管理",path:"/permission/role"},component:()=>import("@/views/Permission/Role/index.vue")},
        {path:"/permission/menu",name:"PermissionMenu",meta:{title:"菜单管理",path:"/permission/menu"},component:()=>import("@/views/Permission/Menu/index.vue")},
      ]},
      {path:"/train",name:"Train",meta:{title:"训练管理"},children:[
        {path:"/train/classroom",name:"TrainClassroom",meta:{title:"课堂训练",path:"/train/classroom"},component:()=>import("@/views/Train/Classroom/index.vue")},
        {path:"/train/afterclass",name:"TrainAfterclass",meta:{title:"课后训练",path:"/train/afterclass"},component:()=>import("@/views/Train/Afterclass/index.vue")},
        {path:"/train/character",name:"TrainCharacter",meta:{title:"品格教育",path:"/train/character"},component:()=>import("@/views/Train/Character/index.vue")},
      ]}
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: dynamicRoutes
})

export default router
