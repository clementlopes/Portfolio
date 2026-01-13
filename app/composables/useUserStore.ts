import { defineStore } from "pinia";
import { ref } from 'vue'
import {usePocketbaseStore} from "~/composables/usePocketbaseStore";

export const useUserStore = defineStore('userStore', () => {

    const pocketbase = usePocketbaseStore();
    const userData = ref<UserType | null>(null);

    const saveUserData = (authData: UserType) => {
        userData.value = authData
    }

    const clearUser = () => {
        userData.value = null
    }
    
    const setUserData = (data: UserType) =>{
        userData.value = data;
    }

    const userDataHasEdited = async (data: UserType) => {
        return JSON.stringify(data) !== JSON.stringify(userData.value);
    }

    const updateUser = async (newData: UserType) =>{

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
        userDataHasEdited,

    }

});