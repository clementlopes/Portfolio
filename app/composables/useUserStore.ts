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
    
    const updateUser = async (newData: UserType)=>{

        console.table(newData)
        const data = {
            "name": newData.name,
            "themeMode": newData.themeMode,
        };

        const record = await pocketbase.pb.collection('users').update(newData.id, data);
        return record
    }

    const userDataHasEdited = async (data: UserType) => {
        return JSON.stringify(data) !== JSON.stringify(userData.value);
    }

 



    return {
        userData,
        saveUserData,
        clearUser,
        updateUser,
        userDataHasEdited,

    }

});