<template>
  <section id="hero" class="hero min-h-screen bg-base-100">
    <div
      class="hero-content flex-col lg:flex-row justify-between w-full max-w-7xl px-4 py-12 mt-10"
    >
      <div class="text-center lg:text-left lg:w-1/2">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
        >
          SOFTWARE DEVELOPER<br />
        </h1>
        <p class="py-6 text-lg text-base-content/90">
          I build applications with Vue and Nuxt, integrate them with business systems, and run the
          infrastructure that hosts them. My work covers the full path of a commercial order — from
          the storefront to invoicing — and the self-hosted environment that keeps it online.
        </p>
        <p class="pb-6 text-sm text-base-content/60 font-mono">
          Vue.js · Nuxt · TypeScript · API Integrations · Automation · Self-hosted Infrastructure
        </p>
        <div
          class="flex flex-col items-center sm:flex-row gap-4 justify-center lg:justify-start pt-4"
        >
          <a href="#contact" class="btn btn-primary btn-wide">Contact</a>
          <a href="#projects" class="btn btn-outline btn-wide">View Projects</a>
        </div>
      </div>

      <div
        class="w-96 rounded-full avatar shadow-lg hover:scale-105 hover:shadow-2xl shadow-primary/50 transition-all duration-300"
      >
        <div class="w-96 rounded-full ring-1 ring-primary opacity-70 hover:opacity-100">
          <img src="/img/photo.png" alt="Profile" />
        </div>
      </div>
    </div>
  </section>
</template>
