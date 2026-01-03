export default defineNuxtPlugin(() => {

   // This plugin ensures that the authentication state is refreshed when the app initializes   
  const authStore = useAuthStore()
  authStore.authRefresh()
})

