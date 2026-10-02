<template>
  <div class="w-full min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer class="mt-auto" />

  </div>

</template>

<script setup lang="ts">
import Header from './components/header.vue';
import Footer from './components/footer.vue';

useHead({
  title: 'Clément Lopes - Software Developer | Vue, Nuxt & TypeScript',
  meta: [
    {
      name: 'description',
      content:
        'Software developer working across application development, business systems integration and self-hosted infrastructure. Vue, Nuxt and TypeScript on the front-end; WooCommerce to ERP integration and API automation; Proxmox VE, Docker, networking and monitoring with Uptime Kuma. Based in Braga, Portugal.',
    },

    { name: 'canonical', content: 'https://clementlopes.site' },

    {
      name: 'keywords',
      content:
        'software developer, Vue.js developer, Nuxt, TypeScript, developer Portugal, WooCommerce, ERP integration, API integration, business systems, e-commerce integration, Proxmox VE, LXC, Docker, self-hosting, homelab, DevOps, automation, n8n, Tailscale, Headscale, Cloudflare Tunnel, Nginx Proxy Manager, AdGuard Home, Uptime Kuma, monitoring, Tailwind CSS, Pinia, Vuex, DaisyUI, REST API, MySQL, PocketBase, Clément Lopes',
    },

    { name: 'author', content: 'Clément Lopes' },
  ],
});
</script>
