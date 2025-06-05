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
       
        <div class="grid md:grid-cols-2 gap-8">
          <router-link
            v-for="project in allProjects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow hover:shadow-xl transition-all"
          >
            <!-- Custom corner badge -->
            <div
              class="absolute top-0 left-0 z-10 px-4 py-1 text-xs font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 dark:bg-white/10 backdrop-blur-md rounded-br-2xl rounded-tl-2xl flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C8.686 2 6 4.686 6 8c0 4.97 6 12 6 12s6-7.03 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              {{
                project.type === "coding" ? "Coding Project" : "Design Project"
              }}
            </div>

            <!-- Project Image -->
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <!-- Project Content -->
            <div class="p-5">
              <h3 class="text-lg font-semibold">{{ project.title }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {{ project.subtitle }}
              </p>
              <button
                class="mt-4 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:to-yellow-500 text-sm px-4 py-1.5 rounded-full font-medium text-black"
              >
                See More
              </button>
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
import js1 from "@/assets/javascaffolding/1.png";

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
    slug: "javascaffolding",
    title: "Website Java Scaffolding Kediri",
    subtitle:
      "Company profile site with product showcase and catalog features.",
    image: js1,
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
