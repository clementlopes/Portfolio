import {defineStore} from "pinia";
import { ref, computed } from 'vue';


export const useThemeStore = defineStore('useThemeStore', () =>{

    const activeTheme = ref("dark");

    const getActiveTheme = computed(() =>{
      return activeTheme.value;
    })

    const changeTheme = () => {
        activeTheme.value === "dark" ? activeTheme.value = "light" : activeTheme.value ="dark";
    }

    return{
        activeTheme,
        getActiveTheme,
        changeTheme,
    }

})