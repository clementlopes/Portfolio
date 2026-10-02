<template>
  <section id="about" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 mt-10">
<div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-center mb-12 text-primary">This is me</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Introduction -->
        <div class="lg:order-0 p-4 flex flex-col gap-4">
          <div class="mb-2 text-center">
            <h3 class="text-3xl font-bold mb-6 text-base-content">Hi i'm Clément Lopes</h3>
          </div>

          <ul class="flex flex-col gap-3">
            <li
              v-for="pillar in pillars"
              :key="pillar.title"
              class="rounded-xl border border-base-300 bg-base-200/40 p-4 flex flex-col gap-1"
            >
              <span class="text-xs font-mono text-primary font-bold">{{ pillar.order }}</span>
              <span class="font-semibold text-base-content">{{ pillar.title }}</span>
              <span class="text-sm text-base-content/70 text-justify">{{ pillar.body }}</span>
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-1 p-4 lg:border-l-1 border-gray-500/50">
          <p class="mb-4 text-sm leading-relaxed text-justify">
            My work sits across three areas that reinforce each other. I develop applications with
            Vue, Nuxt and TypeScript, building responsive and accessible interfaces with TailwindCSS
            and DaisyUI, and integrating and testing RESTful APIs. That application work sits on top
            of commercial systems: I connect e-commerce platforms to invoicing and management
            software, transmitting structured order data rather than just displaying a catalog.
          </p>

          <p class="mb-4 text-sm leading-relaxed text-justify">
            Underneath both is the infrastructure. I run a Proxmox VE host that virtualizes the
            workloads with LXC and Docker, keeps public exposure behind a single controlled ingress,
            and gives private services a mesh VPN instead of an open port. Deployment runs through
            self-hosted GitLab and Coolify, and availability is monitored with Uptime Kuma feeding
            alerts to Discord.
          </p>

          <p class="mb-4 text-sm leading-relaxed text-justify">
            Having all three means I can reason about the whole path of an order rather than one
            layer of it — from the storefront, through the ERP, to the hardware that keeps it
            running. I document the limitations of what I build as carefully as the architecture,
            because knowing where a system breaks is part of operating it.
          </p>

          <p class="text-sm leading-relaxed text-justify">
            Collaborative, adaptable, and experienced working in agile environments with Git and
            Kanban. I'm committed to continuous learning and improvement, making one commit at a
            time.
          </p>
          <!--          FILES-->
          <div
            class="w-full rounded-t-2xl bg-base-200 gap-2 md:grid-cols-2 my-4 p-4"
          >
            <div class="w-full grid gap-4 mt-2">
              <h3 class="text-md font-bold">Curriculum</h3>
              <div class="bg-base-100 flex justify-between p-4">
                <a
                  href="/files/CV_Clement_Lopes_En.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-lg hover:text-primary"
                >
                  Resume
                </a>

                <a href="/files/CV_Clement_Lopes_En.pdf" download class="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full grid gap-4 mt-2 hidden ">
              <h3 class="text-md font-bold">Recommendation letter</h3>
              <div class="bg-base-100 flex justify-between p-4">
                <a
                  href="/files/Recommedation_letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-lg hover:text-primary"
                >
                  Recommendation letter
                </a>

                <a href="/files/Recommedation_letter.pdf" download class="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pillars = [
  {
    order: '01',
    title: 'Application Development',
    body: 'Interfaces and applications in Vue, Nuxt and TypeScript — responsive, accessible, and validated against real REST endpoints.',
  },
  {
    order: '02',
    title: 'Business Systems Integration',
    body: 'Connecting e-commerce to invoicing and management software: catalog and stock synchronization, structured order data, nightly automation.',
  },
  {
    order: '03',
    title: 'Infrastructure & Automation',
    body: 'Proxmox VE, LXC and Docker, segmented networking, self-hosted GitLab and Coolify deployments, and monitoring with alerting.',
  },
];
</script>
