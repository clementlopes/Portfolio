import { defineStore } from 'pinia';
import { ref } from 'vue';
import { usePocketbaseStore } from '~/composables/usePocketbaseStore';
import { useAuthStore } from '~/composables/useMyAuthStore';

export const useUserStore = defineStore('userStore', () => {
  const pocketbase = usePocketbaseStore();
  const MyAuthStore = useAuthStore();
  const userData = ref<UserType | null>(null);

  const saveUserData = (authData: UserType) => {
    userData.value = authData;
  };

  const clearUser = () => {
    userData.value = null;
  };

  const updateUser = async (newData: UserType) => {
    try {
      const data = {
        name: newData.name,
        themeMode: newData.themeMode,
      };

      const record = await pocketbase.pb.collection('users').update(newData.id, data);
      return record;
    } catch (error: any) {
      throw new Error(error?.message || 'Failed to update user data. Please try again.');
    }
  };

  const updatePassword = async (
    id: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) => {
    try {
      const data = {
        oldPassword: oldPassword,
        password: newPassword,
        passwordConfirm: confirmPassword,
      };
      const response = await pocketbase.pb.collection('users').update(id, data);
      MyAuthStore.logout();
      return response;
    } catch (error: any) {
      throw new Error(error?.message || 'Failed to update password. Please try again.');
    }
  };

  const userDataHasEdited = async (data: UserType) => {
    return JSON.stringify(data) !== JSON.stringify(userData.value);
  };

  return {
    userData,
    saveUserData,
    clearUser,
    updateUser,
    updatePassword,
    userDataHasEdited,
  };
});
