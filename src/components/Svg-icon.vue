<script setup lang="ts">
import { h, resolveComponent } from 'vue';


const props = withDefaults(defineProps<{
    size?:string
    color?:string
    icon:string
}>(),{
    size:"",
    color:""
})

const render = ()=>{
    if(props.icon){
       return h(resolveComponent("el-icon"),{"color":props.color,"size":props.size},()=>h(resolveComponent(props.icon)))
    }else{
        return h("i")
    }
}
</script>
<template>
    <render></render>
</template>
<style lang='scss' scoped>

</style>