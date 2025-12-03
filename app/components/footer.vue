<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover">About me</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Projects</a>
      <a class="link link-hover">Blog</a>
    </div>

    <div>
      <p class="text-sm">Copyright © {{ new Date().getFullYear() }} - All rights reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component with social links using DaisyUI classes
</script>

<style scoped>
/* This component doesn't need specific styling as it uses DaisyUI classes */
</style>