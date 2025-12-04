<template>
  <section id="about" class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-center mb-12">This is me</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Introduction -->
        <div class="lg:order-0 p-4">
          <div class="mb-8 text-center ">
            <h3 class="text-3xl font-bold mb-6 text-base-content text-primary ">Hi i'm Clément Lopes</h3>
          </div>

        </div>
        <div class="grid grid-cols-1 p-4 lg:border-l-1 border-gray-500/50 ">
          <p class="mb-4 text-justify">
            Junior Frontend Developer with professional experience in building and maintaining
            a Point-of-Sales (POS) system using Vue.js, Vuex, and TypeScript. I specialize in
            creating responsive and user-friendly interfaces with modern technologies like
            TailwindCSS and DaisyUI, and in integrating and testing RESTful APIs using Postman.
          </p>

          <p class="mb-4 text-justify">
            Currently expanding my expertise with Nuxt and Pinia, while aiming to grow into
            a Full Stack Developer in the near future. I'm passionate about creating
            thoughtful, accessible UIs that provide exceptional user experiences.
          </p>

          <p class="text-justify">
            Collaborative, adaptable, and experienced working in agile environments with
            Git and Kanban. I'm committed to continuous learning and improvement,
            making one commit at a time.
          </p>
          <!--          FILES-->
          <div class="w-full grid grid-cols-1 rounded-t-2xl bg-base-200 gap-2 md:grid-cols-2  my-4 p-4 ">

            <div class="w-full grid gap-4">
              <h3 class="text-md font-bold">Curriculum</h3>
              <div class="bg-base-100">
                teste
              </div>
            </div>
            <div class="w-full grid">
              <h3 class="text-md font-bold">Recommedation letter</h3>
              <div class="bg-base-100">
                teste
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Stores
 */

/**
 * Props/Emits
 */

/**
 * References
 */
const componentName = ref('about');

/**
 * Computed Properties
 */

/**
 * Methods
 */

/**
 * Watchers
 */

/**
 * Mounted/Unmounted
 */
</script>

<style scoped>
.prose {
  color: inherit;
}
</style>