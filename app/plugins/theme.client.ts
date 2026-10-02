export default defineNuxtPlugin(() => {
  const themeStore = useThemeStore();

  themeStore.setTheme();
});