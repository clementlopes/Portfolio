<template>
  <section id="projects" class="py-16 bg-base-100">
    <div class="container mx-auto px-4 mt-10">
      <h2 class="text-4xl font-bold text-center mb-4 text-primary">Case Studies</h2>
      <p class="text-center text-base-content/70 max-w-3xl mx-auto mb-16">
        Three areas of work that complement each other: integrating commercial systems, running
        self-hosted infrastructure, and developing applications. Each case study documents the
        architecture, the decisions behind it and the limitations that remain.
      </p>

      <div class="flex flex-col gap-20">
        <div
          v-for="category in sections"
          :key="category.id"
          :id="`category-${category.id}`"
          class="flex flex-col gap-8"
        >
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm text-primary font-bold">{{ category.order }}</span>
              <span class="h-px flex-1 bg-base-300"></span>
              <span class="badge badge-ghost badge-sm">{{ category.caption }}</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-base-content">{{ category.label }}</h3>
            <p class="text-base-content/65 max-w-3xl">{{ category.description }}</p>
          </div>

          <div class="flex flex-col gap-6">
            <ProjectCard
              v-for="entry in category.projects"
              :key="entry.project.id"
              :project="entry.project"
              :number="entry.number"
              :category-label="category.label"
              :open="openProjectId === entry.project.id"
              @open="openProjectId = entry.project.id"
              @close="openProjectId = null"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { projectCategories, getProjectsByCategory } from '~/data/projects';
import ProjectCard from '~/components/projects/ProjectCard.vue';

const openProjectId = ref<string | null>(null);

const sections = computed(() =>
  projectCategories
    .map((category) => ({
      ...category,
      projects: getProjectsByCategory(category.id).map((project, index) => ({
        project,
        number: String(index + 1).padStart(2, '0'),
      })),
    }))
    .filter((category) => category.projects.length > 0)
);
</script>