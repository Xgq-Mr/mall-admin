<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue"
// 引入异步组件
const LayoutAside = defineAsyncComponent(() => import("./LayoutAside/index.vue"))
const LayoutHeader = defineAsyncComponent(() => import("./LayoutHeader/index.vue"))
const LayoutMain = defineAsyncComponent(() => import("./LayoutMain/index.vue"))
</script>
<template>
    <div class="layout">
        <el-container class="layout-container">
            <LayoutAside class="layout-aside" />
            <el-container direction="vertical">
                <LayoutHeader class="layout-header" />
                <LayoutMain class="layout-main" />
            </el-container>
        </el-container>
    </div>
</template>
<style lang='scss' scoped></style>