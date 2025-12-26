import {defineStore} from "pinia";
import {usePocketbaseStore} from "~/composables/usePocketbaseStore";


export const useAuthStore = defineStore('useAuthStore', () =>{

        const pocketBaseStore = usePocketbaseStore();

    const login = async (email: string, password: string) => {

        return await pocketBaseStore.pb.collection('users').authWithPassword(email, password);
    };

    const loginWithGoogle = async () => {

        return await pocketBaseStore.pb.collection('users').authWithOAuth2({provider: 'google'})
    };

return{
    login,
    loginWithGoogle,
}
})