<template>
  <section id="skills" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 mt-10">
      <h2 class="text-4xl font-bold text-center mb-12 text-primary">My Stack</h2>
      <div class="grid grid-rows-1 gap-8">
        <!--        FrontEnd-->
        <div
          class="card bg-base-100 shadow-xl w-full border flex flex-col lg:flex-row p-4 hover:scale-105 hover:border-primary transition duration-1000"
        >
          <div
            class="w-full text-center border-b flex items-center justify-center p-4 lg:border-b-0 lg:w-1/3"
          >
            <h3 class="text-3xl font-bold">FRONTEND</h3>
          </div>
          <div class="w-full flex flex-col flex-wrap lg:w-2/3 md:flex-row">
            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="JavaScript" src="/img/javascript.svg" />
              <p class="flex p-2 text-xl font-semibold">Javascript</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="TypeScript" src="/img/typescript.svg" />
              <p class="flex p-2 text-xl font-semibold">TypeScript</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="Vue.js" src="/img/vue.svg" />
              <p class="flex p-2 text-xl font-semibold">Vue.js</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="Nuxt" src="/img/nuxt.svg" />
              <p class="flex p-2 text-xl font-semibold">Nuxt</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="TailWindCSS" src="/img/tailwind.svg" />
              <p class="flex p-2 text-xl font-semibold">TailwindCss</p>
            </div>
          </div>
        </div>
        <!-- BackEnd -->
        <div
          class="card bg-base-100 shadow-xl w-full border flex flex-col lg:flex-row p-4 hover:scale-105 hover:border-primary transition duration-1000"
        >
          <div
            class="w-full text-center border-b flex items-center justify-center p-4 lg:border-b-0 lg:w-1/3"
          >
            <h3 class="text-3xl font-bold">BACKEND</h3>
          </div>
          <div class="w-full flex flex-col flex-wrap lg:w-2/3 md:flex-row">
            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16 base" alt="PocketBase" src="/img/pocketbase.svg" />
              <p class="flex p-2 text-xl font-semibold">PocketBase</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="SupaBase" src="/img/supabase.png" />
              <p class="flex p-2 text-xl font-semibold">SupaBase</p>
            </div>
          </div>
        </div>
        <!-- DATABASE -->
        <div
          class="card bg-base-100 shadow-xl w-full border flex flex-col lg:flex-row p-4 hover:scale-105 hover:border-primary transition duration-1000"
        >
          <div
            class="w-full text-center border-b flex items-center justify-center p-4 lg:border-b-0 lg:w-1/3"
          >
            <h3 class="text-3xl font-bold">DATABASE</h3>
          </div>
          <div class="w-full flex flex-col flex-wrap lg:w-2/3 md:flex-row">
            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="SQL" src="/img/sql.png" />
              <p class="flex p-2 text-xl font-semibold">SQL</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="MySQL" src="/img/MySQL.svg" />
              <p class="flex p-2 text-xl font-semibold">MySql</p>
            </div>
          </div>
        </div>
        <!-- TOOLS -->
        <div
          class="card bg-base-100 shadow-xl w-full border flex flex-col lg:flex-row p-4 hover:scale-105 hover:border-primary transition duration-1000"
        >
          <div
            class="w-full text-center border-b flex items-center justify-center p-4 lg:border-b-0 lg:w-1/3"
          >
            <h3 class="text-3xl font-bold">TOOLS</h3>
          </div>
          <div class="w-full flex flex-col flex-wrap lg:w-2/3 md:flex-row">
            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="Git" src="/img/git.svg" />
              <p class="flex p-2 text-xl font-semibold">Git</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="Docker" src="/img/docker.svg" />
              <p class="flex p-2 text-xl font-semibold">Docker</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="Proxmox" src="/img/proxmox.svg" />
              <p class="flex p-2 text-xl font-semibold">Proxmox</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="Postman" src="/img/postman.svg" />
              <p class="flex p-2 text-xl font-semibold">Postman</p>
            </div>

            <div
              class="flex flex-cols-2 p-4 items-center text-center hover:scale-110 transition duration-300"
            >
              <img class="flex size-16" alt="SonarQube" src="/img/sonar.png" />
              <p class="flex p-2 text-xl font-semibold">SonarQube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
