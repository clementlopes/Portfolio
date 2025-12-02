import {defineStore} from "pinia";
import { ref } from "vue";

export const useTheme = defineStore('theme', () =>{

    const activeTheme = ref("dracula");


    const getActiveTheme = computed(() =>{
      return activeTheme.value;
    })

})