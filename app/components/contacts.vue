<script setup lang="ts">

</script>

<template>
  <section id="contact" class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Get In Touch</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div class="bg-base-200 p-8 rounded-2xl shadow-lg">
          <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="h-6 w-6 text-primary">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 class="font-bold">Location</h4>
                <p class="text-base-content/80">Braga, Portugal</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-secondary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="h-6 w-6 text-secondary">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 class="font-bold">Email</h4>
                <p class="text-base-content/80">labs.clement@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="text-2xl font-bold mb-6">Social</h3>
            <div>
              <div class="flex items-center">
                <a>
                  <img class="size-8 mr-2 " alt="GitHub" src="/github.svg"  />
                </a>
                <a>
                  <img class="size-10 mr-2" alt="LinkedIn" src="/linkedin.svg"  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>