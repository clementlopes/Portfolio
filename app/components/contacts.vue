<template>
  <section id="contact" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 mt-10">
      <h2 class="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div class="bg-base-200 p-8 rounded-2xl shadow-lg">
          <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-primary/10 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
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
              <div class="bg-primary/10 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
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
                <a
                  class="px-2 hover:text-primary"
                  href="https://www.github.com/clementlopes"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
                    ></path>
                  </svg>
                </a>

                <a
                  class="px-2 hover:text-primary"
                  href="https://www.linkedin.com/in/cl%C3%A9ment-lopes-208719375/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path data-name="layer1" d="M3.078 22.331h12.188v36.844H3.078z"></path>

                    <path
                      data-name="layer2"
                      d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z"
                    ></path>

                    <path
                      data-name="layer1"
                      d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z"
                    ></path>
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