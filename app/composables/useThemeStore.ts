import {defineStore} from "pinia";
import { ref, computed } from 'vue';

export const useThemeStore = defineStore('useThemeStore', () =>{

    const activeTheme = ref("forest");

    const getActiveTheme = computed(() =>{
      return activeTheme.value;
    })

    const changeTheme = () => {
        activeTheme.value === "forest" ? activeTheme.value = "winter" : activeTheme.value ="forest";
    }

    return{
        activeTheme,
        getActiveTheme,
        changeTheme,
    }

})