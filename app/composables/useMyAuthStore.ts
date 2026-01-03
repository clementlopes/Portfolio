import { defineStore } from 'pinia'
import { usePocketbaseStore } from './usePocketbaseStore'
import { useUserStore } from './useUserStore'

export const useAuthStore = defineStore('auth', () => {
  const pocketBaseStore = usePocketbaseStore()
  const userStore = useUserStore()

  const mapAuthDataToUser = (authData: any): User => {
    
    const record = authData.record

    const avatar = record.avatar
      ? pocketBaseStore.pb.files.getURL(record, record.avatar, { thumb: '100x250' })
      : ''

    const d = new Date(record.created)
    const created =
      `${String(d.getDate()).padStart(2, '0')}-` +
      `${String(d.getMonth() + 1).padStart(2, '0')}-` +
      `${d.getFullYear()}`

    return {
      id: record.id,
      token: authData.token,
      name: record.name,
      email: record.email,
      avatar,
      created,
      themeMode: record.themeMode,
    }
  }

  const login = async (email: string, password: string) => {
    const authData =
      await pocketBaseStore.pb
        .collection('users')
        .authWithPassword(email, password)
        
     userStore.saveUserData(mapAuthDataToUser(authData))
    return authData
  }

  const loginWithGoogle = async () => {
    const authData =
      await pocketBaseStore.pb
        .collection('users')
        .authWithOAuth2({ provider: 'google' })

    userStore.saveUserData(mapAuthDataToUser(authData))
    return authData
  }

  const logout = () => {
    pocketBaseStore.pb.authStore.clear()
    localStorage.removeItem('pocketbase_auth')
    userStore.clearUser()
  }

  const authRefresh = async () => {
   
    if (!pocketBaseStore.pb.authStore.isValid) {
      pocketBaseStore.pb.authStore.clear()
      userStore.clearUser()
      return
    }
    
    const authData = await pocketBaseStore.pb.collection('users').authRefresh();
   
    userStore.saveUserData( mapAuthDataToUser(authData) )
  }

  return {
    login,
    loginWithGoogle,
    logout,
    authRefresh,
  }
})
