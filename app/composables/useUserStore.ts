import { defineStore } from "pinia";
import { ref } from 'vue'
import {usePocketbaseStore} from "~/composables/usePocketbaseStore";

export const useUserStore = defineStore('userStore', () => {

    const pocketbase = usePocketbaseStore();
    const userData = ref<User | null>(null);

    const saveUserData = (authData: User) => {
        userData.value = authData
    }

    const clearUser = () => {
        userData.value = null
    }

    const dataHasEdited = async (data: User) => {
        return JSON.stringify(data) !== JSON.stringify(userData.value);
    }

    const updateUser = async (newData: User) =>{

       const data = {
            "name": newData.name,
            "themeMode": newData.themeMode,
            "oldPassword": newData.oldPassword,
            "password": newData.password,
            "passwordConfirm": newData.passwordConfirm,
        };

        const record = await pocketbase.pb.collection('users').update(newData.id, data);
    }


    return {
        userData,
        saveUserData,
        clearUser,
        updateUser,

    }

});