<template>
  <div>
    <Hero />
    <Skills />
    <Projects />
    <Contacts />
  </div>
</template>

<script setup lang="ts">
// Home page with all portfolio sections
import Hero from '~/components/hero.vue'
import Skills from '~/components/skills.vue'
import Projects from '~/components/projects.vue'
import Contacts from '~/components/contacts.vue'

useHead({
  title: 'Clément Lopes - Portfolio',
  meta: [
    { name: 'description', content: 'Full Stack Developer & DevOps Engineer Portfolio' }
  ]
})
</script>