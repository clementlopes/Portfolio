<template>
  <section id="projects" class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- PGO -->
        <div class="card bg-base-100 shadow-xl border hover:shadow-2xl transition-shadow duration-300">
          <figure class="px-4 pt-4">
            <div class="bg-primary/10 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="h-12 w-12 text-primary">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title text-xl">Pgo</h3>
            <p class="text-base-content/80">Pgo é uma plataforma que compõe orçamentos com linhas individuais, aplica
              desconto e IVA por linha e produz um PDF final com os totais calculados.</p>
            <div class="mt-4">
              <div class="badge badge-outline badge-primary mr-2 mt-2">MySQL</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">PHP</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">HTML</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">Bootstrap</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">JavaScript</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">jsPDF</div>
            </div>
          </div>
        </div>

        <!-- Goldylocks POS -->
        <div class="card bg-base-100 shadow-xl border hover:shadow-2xl transition-shadow duration-300">
          <figure class="px-4 pt-4">
            <div class="bg-primary/10 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="h-12 w-12 text-primary">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title text-xl">Goldylocks POS</h3>
            <p class="text-base-content/80">Pgo é uma plataforma que compõe orçamentos com linhas individuais, aplica
              desconto e IVA por linha e produz um PDF final com os totais calculados.</p>
            <div class="mt-4">
              <div class="badge badge-outline badge-primary mr-2 mt-2">Vue.js</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">VueX</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">TailwindCSS</div>
              <div class="badge badge-outline badge-primary mr-2 mt-2">Electron</div>
            </div>
          </div>
        </div>


      </div>


    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>