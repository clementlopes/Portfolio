import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('useThemeStore', () => {
  const activeTheme = ref('forest');

  const setTheme = () => {
    activeTheme.value = localStorage.getItem('theme') || 'forest';
    localStorage.setItem('theme', activeTheme.value);
  };

  const changeTheme = () => {
    activeTheme.value =
      activeTheme.value === 'forest' ? 'winter' : 'forest';
  };

  return {
    activeTheme,
    setTheme,
    changeTheme,
  };
});