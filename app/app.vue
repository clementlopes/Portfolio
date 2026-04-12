<template>
  <div class="w-full min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <NuxtPage />
       <DrawersContainer />
    <Toast />
    <Alert />
    </main>
    <Footer class="mt-auto" />
   
  </div>

</template>

<script setup lang="ts">
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import DrawersContainer from './components/drawers/drawersContainer.vue';
import Toast from './components/toast/toast.vue';
import Alert from '~/components/alerts/alert.vue';

useHead({
  title: 'Clément Lopes - Frontend Developer',
  meta: [
    {
      name: 'description',
      content:
        'Frontend Developer passionate about Vue, Nuxt, and accessible UIs. Portfolio featuring projects, skills, and contact. Open to junior/entry-level roles in Portugal and remote.',
    },

    { name: 'canonical', content: 'https://clementlopes.site' },

    {
      name: 'keywords',
      content:
        'frontend developer, Vue.js developer, Nuxt , developer Portugal, Tailwind CSS, Pinia, VueX, State Management, DaisyUI, Vue 3, Nuxt 4, UI/UX, API, javascript, typescript, Clément Lopes',
    },

    { name: 'author', content: 'Clément Lopes' },
  ],
});
</script>
