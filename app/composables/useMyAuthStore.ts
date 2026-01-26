import { defineStore } from 'pinia';
import { usePocketbaseStore } from './usePocketbaseStore';
import { useUserStore } from './useUserStore';
import { useThemeStore } from '~/composables/useThemeStore';

export const useAuthStore = defineStore('auth', () => {
  const pocketBaseStore = usePocketbaseStore();
  const userStore = useUserStore();
  const themeStore = useThemeStore();

  const mapAuthDataToUser = (authData: { token: string; record: any }): UserType => {
    const record = authData.record;

    const avatar = record.avatar
      ? pocketBaseStore.pb.files.getURL(record, record.avatar, { thumb: '100x250' })
      : '';

    const d = new Date(record.created);
    const created =
      `${String(d.getDate()).padStart(2, '0')}-` +
      `${String(d.getMonth() + 1).padStart(2, '0')}-` +
      `${d.getFullYear()}`;

    if (record.themeMode === '') {
      record.themeMode = themeStore.activeTheme;
    }

    return {
      id: record.id,
      token: authData.token,
      name: record.name,
      email: record.email,
      avatar,
      created,
      themeMode: record.themeMode,
    };
  };

  const login = async (email: string, password: string) => {
    try {
      const authData = await pocketBaseStore.pb
        .collection('users')
        .authWithPassword(email, password);

      userStore.saveUserData(mapAuthDataToUser(authData));
      return authData;
    } catch (error: any) {
      throw new Error(error?.message || 'Login failed. Please check your credentials.');
    }
  };

  const loginWithGoogle = async () => {
    try {
      const authData = await pocketBaseStore.pb
        .collection('users')
        .authWithOAuth2({ provider: 'google' });

      userStore.saveUserData(mapAuthDataToUser(authData));
      return authData;
    } catch (error: any) {
      throw new Error(error?.message || 'Google login failed. Please try again.');
    }
  };

  const logout = () => {
    pocketBaseStore.pb.authStore.clear();
    localStorage.removeItem('pocketbase_auth');
    userStore.clearUser();
  };

  const authRefresh = async () => {
    try {
      if (!pocketBaseStore.pb.authStore.isValid) {
        pocketBaseStore.pb.authStore.clear();
        localStorage.removeItem('pocketbase_auth');
        userStore.clearUser();
        return;
      }

      const authData = await pocketBaseStore.pb.collection('users').authRefresh();

      userStore.saveUserData(mapAuthDataToUser(authData));
    } catch (error: any) {
      console.error('Auth refresh failed:', error?.message);
      pocketBaseStore.pb.authStore.clear();
      localStorage.removeItem('pocketbase_auth');
      userStore.clearUser();
    }
  };
  const emailChange = async (newEmail: string) => {
    try {
      await pocketBaseStore.pb.collection('users').requestEmailChange(newEmail);
    } catch (error: any) {
      throw new Error(error?.message || 'Email change failed. Please try again.');
    }
  };

  return {
      login,
      loginWithGoogle,
      logout,
      authRefresh,
      emailChange,
    };
  });
