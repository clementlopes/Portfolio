<template>
  <section id="about" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 mt-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-center mb-12 text-primary">This is me</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Introduction -->
        <div class="lg:order-0 p-4">
          <div class="mb-8 text-center">
            <h3 class="text-3xl font-bold mb-6 text-base-content">Hi i'm Clément Lopes</h3>
          </div>
        </div>
        <div class="grid grid-cols-1 p-4 lg:border-l-1 border-gray-500/50">
          <p class="mb-4 text-justify">
            Frontend Developer with professional experience in building and maintaining a
            Point-of-Sales (POS) system using Vue.js, Vuex, and TypeScript. I specialize in creating
            responsive and user-friendly interfaces with modern technologies like TailwindCSS and
            DaisyUI, and in integrating and testing RESTful APIs using Postman.
          </p>

          <p class="mb-4 text-justify">
            Currently expanding my expertise with Nuxt and Pinia, while aiming to grow into a Full
            Stack Developer in the near future. I'm passionate about creating thoughtful, accessible
            UIs that provide exceptional user experiences.
          </p>

          <p class="text-justify">
            Collaborative, adaptable, and experienced working in agile environments with Git and
            Kanban. I'm committed to continuous learning and improvement, making one commit at a
            time.
          </p>
          <!--          FILES-->
          <div
            class="w-full grid grid-cols-1 rounded-t-2xl bg-base-200 gap-2 md:grid-cols-2 my-4 p-4"
          >
            <div class="w-full grid gap-4 mt-2">
              <h3 class="text-md font-bold">Curriculum</h3>
              <div class="bg-base-100 flex justify-between p-4">
                <a
                  href="/files/clement_lopes_cv_En.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-lg hover:text-primary"
                >
                  Resume
                </a>

                <a href="/files/clement_lopes_cv_En.pdf" download class="hover:text-primary">
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
            <div class="w-full grid gap-4 mt-2">
              <h3 class="text-md font-bold">Recommedation letter</h3>
              <div class="bg-base-100 flex justify-between p-4">
                <a
                  href="/files/Recommedation_letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-lg hover:text-primary"
                >
                  Recommedation letter
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