<template>
  <section id="hero" class="hero min-h-screen bg-base-100">
    <div class="hero-content flex-col lg:flex-row justify-between w-full max-w-7xl px-4 py-12">
      <div class="text-center lg:text-left lg:w-1/2">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Hi, I'm Clément<br/>
          <span
              class="text-xl md:text-2xl font-normal normal-case text-base-content/80">Júnior Frontend Developer</span>
        </h1>
        <p class="py-6 text-lg text-base-content/90">
          Passionate about creating robust web applications with modern technologies.
          Specialized in Nuxt, Vue, and API integration with PocketBase.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button class="btn btn-primary btn-wide">Get Started</button>
          <button class="btn btn-outline btn-wide">View Projects</button>
        </div>

      </div>

      <div class="w-96 rounded-full avatar hover:shadow-xl shadow-primary/30 transition-shadow duration-300 ">
        <div class="w-96 rounded-full ring-1 ring-primary">
          <img src="/photo.png" alt="Profile photo" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>