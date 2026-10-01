<template>
  <div
    class="collapse collapse-arrow bg-base-100 border border-base-300 rounded-2xl shadow-lg hover:border-primary/50 transition-colors duration-300"
  >
    <input type="radio" name="portfolio-project" />

    <div class="collapse-title">
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge badge-primary badge-sm font-mono">{{ projectNumber }}</span>
          <span class="badge badge-ghost badge-sm">{{ categoryLabel }}</span>
          <span v-if="project.links.length" class="badge badge-outline badge-sm gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            live project
          </span>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-base-content">{{ project.title }}</h3>
          <p class="text-sm text-base-content/60 mt-1">{{ project.subtitle }}</p>
          <p class="text-base-content/80 text-justify mt-3">{{ project.summary }}</p>
        </div>

        <ul class="flex flex-wrap gap-2">
          <li
            v-for="highlight in project.highlights"
            :key="highlight"
            class="badge badge-outline badge-primary"
          >
            {{ highlight }}
          </li>
        </ul>

        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          {{ project.limitations.length ? 'Case study, architecture & limitations' : 'Case study' }}
        </p>
      </div>
    </div>

    <div class="collapse-content">
      <div class="border-t border-base-300 pt-6 flex flex-col gap-8">
        <section
          v-for="section in project.sections"
          :key="section.title"
          class="flex flex-col gap-3"
        >
          <h4 class="font-semibold text-lg text-base-content">{{ section.title }}</h4>

          <p v-if="section.body" class="text-base-content/80 text-justify leading-relaxed">
            {{ section.body }}
          </p>

          <ul v-if="section.items" class="flex flex-col gap-2">
            <li
              v-for="item in section.items"
              :key="item"
              class="flex gap-3 text-base-content/80 text-justify"
            >
              <span class="text-primary mt-1 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <component
            :is="diagrams[section.diagram]"
            v-if="section.diagram"
            class="mt-2 rounded-xl border border-base-300 bg-base-200/40 p-4"
          />
        </section>

        <div v-if="project.stack.length" class="flex flex-col gap-3">
          <h4 class="font-semibold text-lg text-base-content">Technologies</h4>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in project.stack"
              :key="item.label"
              class="badge badge-outline gap-2 py-3 px-3"
            >
              <img
                v-if="item.icon"
                :src="item.icon"
                :alt="item.label"
                class="size-4"
                loading="lazy"
              />
              {{ item.label }}
            </li>
          </ul>
        </div>

        <div
          v-if="project.limitations.length"
          class="rounded-xl border border-base-300 bg-base-200/50 p-5 flex flex-col gap-4"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4 text-base-content/60"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h4 class="font-semibold text-base-content">Known limitations</h4>
          </div>

          <div
            v-for="limitation in project.limitations"
            :key="limitation.title"
            class="border-l-2 border-primary/40 pl-4 flex flex-col gap-1"
          >
            <p class="font-medium text-base-content">{{ limitation.title }}</p>
            <p class="text-sm text-base-content/75 text-justify leading-relaxed">
              {{ limitation.detail }}
            </p>
            <p v-if="limitation.mitigation" class="text-sm text-base-content/55">
              <span class="font-semibold">Mitigation —</span> {{ limitation.mitigation }}
            </p>
          </div>
        </div>

        <ul v-if="project.links.length" class="flex flex-wrap gap-3">
          <li v-for="link in project.links" :key="link.href">
            <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-sm gap-2"
            >
              {{ link.label }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import OrderFlowDiagram from '~/components/diagrams/OrderFlowDiagram.vue';
import NetworkTopologyDiagram from '~/components/diagrams/NetworkTopologyDiagram.vue';

const props = defineProps<{
  project: ProjectType;
  number: string;
  categoryLabel: string;
}>();

const projectNumber = computed(() => props.number);

const diagrams = {
  'order-flow': OrderFlowDiagram,
  'network-topology': NetworkTopologyDiagram,
};
</script>