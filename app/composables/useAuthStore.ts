import { defineStore } from "pinia";
import { usePocketbaseStore } from "~/composables/usePocketbaseStore";
import { useUserStore } from "~/composables/useUserStore";


export const useAuthStore = defineStore('useAuthStore', () => {

    const pocketBaseStore = usePocketbaseStore();
    const userStore = useUserStore();

    const login = async (email: string, password: string) => {

        return await pocketBaseStore.pb.collection('users').authWithPassword(email, password);
    };

    const loginWithGoogle = async () => {

        return await pocketBaseStore.pb.collection('users').authWithOAuth2({ provider: 'google' })
    };

    const logout = async () => {
        localStorage.removeItem('pocketbase_auth')
        await pocketBaseStore.pb.authStore.clear();
    };

    const authRefresh = async () => {
        const authData = await pocketBaseStore.pb.collection('users').authRefresh();
        await userStore.saveUserData(authData);
    }

    return {
        login,
        loginWithGoogle,
        logout,
        authRefresh,
    }
})