

<template>
  <div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
    <!-- Vertical progress indicator -->
    <div class="relative h-64 w-2 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        class="absolute top-0 left-0 w-full bg-primary rounded-full transition-all duration-300 ease-out"
        :style="{ height: `${scrollProgress}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollProgress = ref(0);

// Calculate scroll progress percentage
const calculateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Calculate the percentage scrolled (normal: empty at top, full at bottom)
  const scrollPercentage = (scrollTop / (docHeight - windowHeight)) * 100;

  // Constrain between 0 and 100
  scrollProgress.value = Math.min(Math.max(scrollPercentage, 0), 100);
};

// Initialize and add scroll event listener
onMounted(() => {
  calculateScrollProgress();
  window.addEventListener('scroll', calculateScrollProgress);
});

// Clean up event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('scroll', calculateScrollProgress);
});
</script>