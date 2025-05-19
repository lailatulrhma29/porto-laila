<template>
  <section class="px-6 py-16 bg-white text-black">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-3xl font-bold mb-10 text-center">My Projects</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <router-link
          v-for="project in projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="border rounded-lg shadow hover:shadow-xl transition overflow-hidden group"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold group-hover:underline">
              {{ project.title }}
            </h2>
            <p class="text-sm mt-2 text-gray-600">{{ project.subtitle }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import dashboard from '@/assets/AQMS/dashboardaqms.png'
import rentspace from '@/assets/rentspace/SS4.png'
import home from '@/assets/shopee/home.png'
import landingpage from '@/assets/eduwork/landingpage.png'

const projects = [
  {
    slug: 'aqms',
    title: 'AQMS Dashboard',
    subtitle: 'Real-time air quality monitoring system.',
    image: dashboard
  },
  {
    slug: 'rent-space',
    title: 'Rent Space App',
    subtitle: 'Coworking booking app with React & Laravel backend.',
    image: rentspace
  },
  {
    slug: 'tracking-ui',
    title: 'Parcel Tracking UI',
    subtitle: 'Design concept for real-time shipment tracking.',
    image: home
  },
  {
    slug: 'landing-page',
    title: 'Eduwork Landing Page',
    subtitle: 'UI design for digital bootcamp platform homepage.',
    image: landingpage
  }
]
</script>