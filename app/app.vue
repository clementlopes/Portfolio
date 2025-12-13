<template>
    <Header/>
    <NuxtPage/>
    <ProgressBar/>
    <Footer/>
</template>

<script setup lang="ts">
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import ProgressBar from './components/progressBar.vue';

useHead({
  title: 'Clément Lopes - Frontend Developer',
  meta: [
    { name: 'description',
      content: 'Frontend Developer passionate about Vue, Nuxt, and accessible UIs. Portfolio featuring projects, skills, and contact. Open to junior/entry-level roles in Portugal and remote.' },

    { name: 'canonical', content: 'https://clementlopes.site' },

    { name: 'keywords', content: 'frontend developer, Vue.js developer, Nuxt , developer Portugal, Tailwind CSS, Pinia, DaisyUI, Vue 3, Nuxt 4, API, javascript, typescript, Clément Lopes' },

    { name: 'author', content: 'Clément Lopes' },
  ]

})
</script>