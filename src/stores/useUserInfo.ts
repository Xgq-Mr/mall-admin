
import {defineStore} from "pinia"
import { ref } from "vue"

export const useInfoStore = defineStore("useInfoStore",()=>{
    const token = ref("")
    return {
        token
    } 
},  {persist: true})