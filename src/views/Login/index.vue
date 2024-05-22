<script setup lang="ts">
import { reactive, ref } from 'vue';
import { LoginApi } from "@/api/userInfo"
import { useInfoStore } from "@/stores/useUserInfo"
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import type { LoginParamsType } from '@/api/userInfo/types';
import { useRouter } from "vue-router"
const router = useRouter()
const useInfo = useInfoStore()
// 表单数据
const formData = ref<LoginParamsType>({
    username: "",
    password: ""
})
const formDataRef = ref<FormInstance>()
// 校验规则
const rules = reactive<FormRules<LoginParamsType>>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
})
// 登录
const handleSubmit = () => {
    formDataRef.value!.validate(async (valid: boolean) => {
        if (valid) {
            try {
                const res = await LoginApi(formData.value)
                useInfo.token = res.data
                router.push("/")
                ElMessage.success("登录成功！")
            } catch (error) {
                console.log(error);
            }
        }
    })
}

</script>
<template>
    <div class="login-bg">
        <div class="login">
            <div class="top">
                <p>用户登录</p>
                <span>青牛前端后台管理系统</span>
            </div>
            <el-form ref="formDataRef" :model="formData" :rules="rules">
                <el-form-item prop="username">
                    <el-input v-model="formData.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" show-password v-model="formData.password" placeholder="请输入用户密码" />
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%;" type="primary" @click="handleSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.login {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;

    .top {
        p {
            font-size: 23px;
        }

        span {
            font-size: 16px;
            color: #999;
            display: inline-block;
            margin: 10px 0
        }

        text-align: center;
    }
}
</style>