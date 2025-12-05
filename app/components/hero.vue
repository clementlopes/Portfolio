<template>
  <section id="hero" class="hero min-h-screen bg-base-100">
    <div class="hero-content flex-col lg:flex-row justify-between w-full max-w-7xl px-4 py-12">
      <div class="text-center lg:text-left lg:w-1/2">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          FRONTEND DEVELOPER<br/>
        </h1>
        <p class="py-6 text-lg text-base-content/90">
          A curious frontend developer building thoughtful, responsive, and accessible UIs with Vue & Nuxt
          making one commit at a time. Currently leveling up and open to junior opportunities.</p>
        <div class="flex flex-col items-center sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <a href="#contact" class="btn btn-primary btn-wide">Contact</a>
          <a href="#projects" class="btn btn-outline btn-wide">View Projects</a>
        </div>

      </div>

      <div class=" w-96 rounded-full avatar shadow-lg hover:scale-105 hover:shadow-2xl shadow-primary/50 transition-all duration-300">
        <div class="w-96 rounded-full ring-1 ring-primary opacity-70 hover:opacity-100">
          <img src="/img/photo.png" alt="Profile photo"/>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>