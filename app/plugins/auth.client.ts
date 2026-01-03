export default defineNuxtPlugin(async () => {

   // This plugin ensures that the authentication state is refreshed when the app initializes   
  const authStore = useAuthStore()
  await authStore.authRefresh()
})

