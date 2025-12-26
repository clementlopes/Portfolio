import {defineStore} from "pinia";
import {ref} from 'vue'
export const useToastStore = defineStore('useToastStore', () =>{

    const toasts: Toast[] = ref([])

    const openToast = ({type, message}) =>{
        const id = Date.now()

        toasts.value.push({id, type, message})

        setTimeout(() =>{
            toasts.value = toasts.value.filter(toast => toast.id !== id)
        }, 2000)

    }

    return{
        openToast,
    }


})