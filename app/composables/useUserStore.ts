import { defineStore } from "pinia";
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {

    const userData = ref<User | null>(null);

    const saveUserData = (authData: User) => {
        userData.value = authData
    }

    const clearUser = () => {
        userData.value = null
    }


    return {
        userData,
        saveUserData,
        clearUser,

    }

});