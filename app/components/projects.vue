<template>
  <section id="projects" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 mt-10">
      <h2 class="text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- PGO -->
        <div
          class="card bg-base-100 shadow-xl border hover:shadow-2xl hover:border-primary transition-shadow duration-300"
        >
          <a href="https://github.com/clementlopes/Plataforma-gestao-de-orcamentos" target="_blank">
            <div class="px-4 pt-4">
              <div class="bg-gray-200 p-4 rounded-lg">
                <img src="/img/pgo.png" alt="Pgo" />
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title text-xl">Plataforma Gestão de Orçamentos</h3>
              <p class="text-base-content/80 text-justify">
                Pgo is a budget-management platform developed entirely by me. It allows creating,
                editing, and deleting documents, clients, and line items with products or services,
                applying line-level values, and generating a final PDF.
              </p>
              <div class="mt-4">
                <div class="badge badge-outline badge-primary mr-2 mt-2">MySQL</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">PHP</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">HTML</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">Bootstrap</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">JavaScript</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">jsPDF</div>
              </div>
            </div>
          </a>
        </div>

        <!-- Goldylocks POS -->
        <div
          class="card bg-base-100 shadow-xl border hover:shadow-2xl hover:border-primary transition-shadow duration-300"
        >
          <a href="https://www.github.com/goldylocks-portugal" target="_blank">
            <div class="px-4 pt-4">
              <div class="bg-gray-200 p-4 rounded-lg">
                <img src="/img/goldylocks.png" alt="Pgo" />
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title text-xl">Goldylocks POS</h3>
              <p class="text-base-content/80 text-justify">
                Responsible for maintaining and improving the frontend of a Point-of-Sale system,
                implementing new features, fixing operational issues within the sales workflow,
                coordinating with the backend team, and performing API testing in Postman.
              </p>
              <div class="mt-4">
                <div class="badge badge-outline badge-primary mr-2 mt-2">Vue.js</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">VueX</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">TailwindCSS</div>
                <div class="badge badge-outline badge-primary mr-2 mt-2">Electron</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
