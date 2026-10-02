<template>
  <section id="skills" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 mt-10">
      <h2 class="text-4xl font-bold text-center mb-4 text-primary">My Stack</h2>
      <p class="text-center text-base-content/70 max-w-3xl mx-auto mb-12">
        Three areas of practice rather than a single list of technologies.
      </p>

      <div class="grid grid-rows-1 gap-8">
        <div
          v-for="area in areas"
          :key="area.title"
          class="card bg-base-100 shadow-xl w-full border flex flex-col lg:flex-row p-4 hover:border-primary transition-colors duration-300"
        >
          <div
            class="w-full text-center border-b flex flex-col items-center justify-center gap-1 p-4 lg:border-b-0 lg:w-1/3"
          >
            <span class="text-xs font-mono text-primary font-bold">{{ area.order }}</span>
            <h3 class="text-2xl lg:text-3xl font-bold">{{ area.title }}</h3>
            <span class="text-xs text-base-content/55">{{ area.caption }}</span>
          </div>

          <div class="w-full flex flex-wrap lg:w-2/3">
            <div
              v-for="item in area.items"
              :key="item.label"
              class="flex flex-col p-4 items-center text-center w-1/3 sm:w-1/4 lg:w-1/5 hover:scale-110 transition duration-300"
            >
              <img
                v-if="item.icon && item.onDark"
                class="size-12 rounded-lg bg-gray-900 p-1.5"
                :src="item.icon"
                :alt="item.label"
                loading="lazy"
              />
              <img
                v-else-if="item.icon"
                class="flex size-12"
                :src="item.icon"
                :alt="item.label"
                loading="lazy"
              />
              <div v-else class="flex size-12 items-center justify-center rounded-lg border border-base-300 bg-base-200">
                <span class="text-lg font-bold text-primary/70">{{ item.initials }}</span>
              </div>
              <p class="flex p-2 text-sm font-semibold leading-tight">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const areas = [
  {
    order: '01',
    title: 'Application Development',
    caption: 'Interfaces & applications',
    items: [
      { label: 'JavaScript', icon: '/img/javascript.svg' },
      { label: 'TypeScript', icon: '/img/typescript.svg' },
      { label: 'Vue.js', icon: '/img/vue.svg' },
      { label: 'Nuxt', icon: '/img/nuxt.svg' },
      { label: 'Pinia', icon: '/img/pinia.webp' },
      { label: 'Vuex', icon: '/img/vuex.svg' },
      { label: 'TailwindCSS', icon: '/img/tailwind.svg' },
      { label: 'DaisyUI', icon: '/img/daisyui.svg' },
      { label: 'Electron', icon: '/img/Electron_Logo.svg' },
    ],
  },
  {
    order: '02',
    title: 'Business Systems Integration',
    caption: 'Commerce & data flows',
    items: [
      { label: 'WooCommerce', icon: '/img/woocommerce.svg' },
      { label: 'Goldylocks ERP', icon: '/img/goldylocks_logo.png' },
      { label: 'ifThenPay', icon: '/img/ifthenpay.svg', onDark: true },
      { label: 'REST API', initials: 'API' },
      { label: 'MySQL', icon: '/img/MySQL.svg' },
      { label: 'SQL', icon: '/img/sql.png' },
      { label: 'PHP', icon: '/img/php.svg' },
      { label: 'PocketBase', icon: '/img/pocketbase.svg' },
      { label: 'Postman', icon: '/img/postman.svg' },
      { label: 'n8n', icon: '/img/n8n.svg' },
    ],
  },
  {
    order: '03',
    title: 'Infrastructure & Automation',
    caption: 'Self-hosting & operations',
    items: [
      { label: 'Proxmox VE', icon: '/img/proxmox.svg' },
      { label: 'Docker', icon: '/img/docker.svg' },
      { label: 'LXC', icon: '/img/linux-containers-lxc.svg' },
      { label: 'Git', icon: '/img/git.svg' },
      { label: 'GitLab', icon: '/img/gitlab.svg' },
      { label: 'Coolify', icon: '/img/coolify.svg' },
      { label: 'NPMplus', icon: '/img/npmplus.svg' },
      { label: 'Cloudflare Tunnel', icon: '/img/cloudflare.svg' },
      { label: 'Tailscale', icon: '/img/tailscale.svg' },
      { label: 'Headscale', icon: '/img/headscale.svg' },
      { label: 'AdGuard Home', icon: '/img/adguardhome.svg' },
      { label: 'Home Assistant', icon: '/img/homeassistant.svg' },
      { label: 'Immich', icon: '/img/immich.svg' },
      { label: 'Uptime Kuma', icon: '/img/uptimekuma.svg' },
      { label: 'Discord', icon: '/img/discord.svg' },
      { label: 'SonarQube', icon: '/img/sonar.png' },
    ],
  },
];
</script>