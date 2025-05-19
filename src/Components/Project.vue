<script setup>
import { RouterLink } from 'vue-router'

import dashboard from '@/assets/AQMS/dashboardaqms.png'
import rentspace from '@/assets/rentspace/SS4.png'

const projects = [
  {
    title: 'AQMS Dashboard',
    image: dashboard,
    slug: 'aqms'
  },
  {
    title: 'Rent Space App',
    image: rentspace,
    slug: 'rent-space'
  }
]
</script>

<template>
  <section id="projects" class="px-6 py-20 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <h3 class="text-3xl font-bold mb-10">Selected Projects</h3>
      <div class="grid md:grid-cols-2 gap-10">
        <RouterLink
          v-for="(project, index) in projects"
          :key="index"
          :to="`/projects/${project.slug}`"
          class="block hover:opacity-90 transition group"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="rounded-lg shadow group-hover:scale-[1.02] transition-transform"
          />
          <h4 class="mt-4 text-xl font-medium group-hover:underline">{{ project.title }}</h4>
        </RouterLink>
      </div>
    </div>
  </section>
</template>