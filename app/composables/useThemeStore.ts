import {defineStore} from "pinia";
import { ref, computed } from 'vue';

export const useThemeStore = defineStore('useThemeStore', () =>{

    const activeTheme = ref("dracula");

    const getActiveTheme = computed(() =>{
      return activeTheme.value;
    })

    const changeTheme = () => {
        activeTheme.value === "dracula" ? activeTheme.value = "light" : activeTheme.value ="dracula";
    }

    return{
        activeTheme,
        getActiveTheme,
        changeTheme,
    }

})