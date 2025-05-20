<template>
  <section
    class="px-6 py-16 mt-10 min-h-screen bg-gradient-to-br from-[#fde7da] via-[#dbeee7] to-[#fef6dc] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white transition-colors"
  >
    <div class="max-w-5xl mx-auto">
      <h1
        class="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight"
      >
        My
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 font-bold drop-shadow-sm"
        >
          Projects
        </span>
      </h1>

      <p
        class="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-xl mx-auto"
      >
        Some of the work I've built — from full-stack dashboards to user-centric
        interfaces.
      </p>

      <!-- Section: With Coding -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          💻 <span>Projects with Coding</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <router-link
            v-for="project in codingProjects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="group border rounded-xl shadow hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="p-5">
              <h3
                class="text-lg font-semibold group-hover:underline text-gray-800 dark:text-white"
              >
                {{ project.title }}
              </h3>
              <p class="text-sm mt-2 text-gray-600 dark:text-gray-400">
                {{ project.subtitle }}
              </p>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Section: UI/UX Design Only -->
      <div>
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          🎨 <span>Design-Only Projects</span>
        </h2>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <router-link
            v-for="project in designProjects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="group border rounded-xl shadow hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="p-5">
              <h3
                class="text-lg font-semibold group-hover:underline text-gray-800 dark:text-white"
              >
                {{ project.title }}
              </h3>
              <p class="text-sm mt-2 text-gray-600 dark:text-gray-400">
                {{ project.subtitle }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dashboard from "@/assets/AQMS/dashboardaqms.png";
import rentspace from "@/assets/rentspace/SS4.png";
import home from "@/assets/shopee/home.png";
import landingpage from "@/assets/eduwork/landingpage.png";
import adminhomescola1 from "@/assets/scola/adminhomescola1.jpg";
import aqms2 from "@/assets/aqms2/aqms2.jpg";

const allProjects = [
  {
    slug: "aqms",
    title: "AQMS Dashboard",
    subtitle: "Real-time air quality monitoring system.",
    image: dashboard,
    type: "coding",
  },
  {
    slug: "scola",
    title: "School Management System",
    subtitle: "Full CRUD dashboard for system administrators.",
    image: adminhomescola1,
    type: "coding",
  },
  {
    slug: "rent-space",
    title: "Rent Space App",
    subtitle: "Coworking booking app with React & Laravel backend.",
    image: rentspace,
    type: "coding",
  },
  {
    slug: "aqms-wqms",
    title: "AQMS & WQMS Dashboard",
    subtitle:
      "User interface for environmental monitoring in IoT applications.",
    image: aqms2,
    type: "coding",
  },
  {
    slug: "admin-panel",
    title: "Parcel Tracking UI",
    subtitle: "Modern interface for tracking parcel deliveries.",
    image: home,
    type: "design",
  },
  {
    slug: "landing-page",
    title: "Eduwork Landing Page",
    subtitle: "UI design for digital bootcamp platform homepage.",
    image: landingpage,
    type: "design",
  },
];

const codingProjects = allProjects.filter((p) => p.type === "coding");
const designProjects = allProjects.filter((p) => p.type === "design");
</script>
