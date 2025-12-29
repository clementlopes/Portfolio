import {defineStore} from "pinia";
import {ref} from 'vue'
import {usePocketbaseStore} from "~/composables/usePocketbaseStore";

export const useUserStore = defineStore('userStore', () => {

    const pocketBaseStore = usePocketbaseStore();

    const userData = ref<User | null>(null);

    const saveUserData = async (data: any) => {

         const url = pocketBaseStore.pb.files.getURL(data.record, data.record.avatar, {'thumb': '100x250'});

        const fullDate = data.record.created; 
        const dateObj = new Date(fullDate);

        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;

        userData.value = {
            id: data.record.id,
            token: data.token,
            name: data.record.name,
            email: data.record.email,
            avatar: url,
            created: formattedDate,
            themeMode: data.record.themeMode,
        } as User;
    }

return{
    userData,
    saveUserData,
}

});