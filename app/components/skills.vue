<script setup lang="ts">

</script>

<template>
  <section id="skills" class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">My Skills & Technologies</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card bg-base-100 shadow-xl border">
          <div class="card-body items-center text-center">
            <div class="bg-primary/10 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-primary">
                <path d="M17.5 19h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V5.8c0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6H6.8c-.5 0-1 .2-1.4.6C5 4.8 4.8 5.3 4.8 5.8v.7"></path>
                <polyline points="14 10 9 15 4 10"></polyline>
              </svg>
            </div>
            <h3 class="card-title text-xl">Frontend</h3>
            <p class="text-base-content/80">Nuxt, Vue, TailwindCSS</p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl border">
          <div class="card-body items-center text-center">
            <div class="bg-secondary/10 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-secondary">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 class="card-title text-xl">Backend & DB</h3>
            <p class="text-base-content/80">PocketBase, API REST</p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl border">
          <div class="card-body items-center text-center">
            <div class="bg-accent/10 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-accent">
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
              </svg>
            </div>
            <h3 class="card-title text-xl">DevOps</h3>
            <p class="text-base-content/80">Docker, GitLab, GitHub</p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl border">
          <div class="card-body items-center text-center">
            <div class="bg-success/10 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-success">
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                <path d="M12 2v2"></path>
                <path d="M12 22v-2"></path>
                <path d="m17 20.66-1-1.73"></path>
                <path d="M11 10.27 7 3.34"></path>
                <path d="m20.66 17-1.73-1"></path>
                <path d="M14 12h8"></path>
                <path d="M2 12h2"></path>
                <path d="m20.66 7-1.73 1"></path>
                <path d="m3.34 17 1.73-1"></path>
                <path d="m17 3.34-1 1.73"></path>
                <path d="m11 13.73-4 6.93"></path>
              </svg>
            </div>
            <h3 class="card-title text-xl">Automation</h3>
            <p class="text-base-content/80">n8n, Postman, SonarQube</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>