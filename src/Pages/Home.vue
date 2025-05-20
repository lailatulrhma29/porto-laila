<template>
  <section
    class="min-h-screen px-6 py-16 text-center bg-gradient-to-br from-[#fde7da] via-[#dbeee7] to-[#fef6dc] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
  >
    <!-- Hero Section -->
    <div class="max-w-3xl mx-auto mt-10">
      <h1
        class="text-5xl md:text-6xl font-light leading-tight text-black dark:text-white"
      >
        Hi, I'm
        <span
          class="bg-white/40 dark:bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 dark:from-indigo-300 dark:via-pink-400 dark:to-yellow-300"
        >
          Laila
        </span>
      </h1>

      <h2
        class="mt-6 text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap justify-center gap-2"
      >
        <span class="text-black dark:text-white">I</span>
        <span class="outline-text bg-transparent px-2">CODE, DESIGN,</span>
        <span class="text-black dark:text-white">&</span>
        <span class="outline-text bg-transparent px-2">WRITE</span>
      </h2>

      <p class="mt-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
        Fullstack Developer (frontend-focused) passionate about building clean,
        functional interfaces. Exploring UI/UX. Fast learner, problem solver,
        and tech & design enthusiast.
      </p>

      <div class="mt-8 flex justify-center gap-4">
        <router-link
          to="/projects"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm shadow transition"
        >
          View My Work
        </router-link>
        <router-link
          to="/contact"
          class="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full text-sm shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
        >
          Get in Touch
        </router-link>
      </div>
    </div>

    <!-- Section Divider -->
    <div class="mt-20 max-w-3xl mx-auto">
      <div
        class="text-sm tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-2"
      >
        My Recent Work
      </div>
    </div>

    <!-- Project Blocks -->
    <div class="space-y-10 mt-10">
      <div
        v-for="project in projects"
        :key="project.title"
        @click="goToDetail(project.slug)"
        class="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl backdrop-blur-md bg-white/60 dark:bg-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group"
        :class="project.bg"
      >
        <!-- Text -->
        <div class="md:w-1/2 p-8 flex flex-col justify-center text-left">
          <h3
            class="text-2xl font-semibold group-hover:underline text-gray-700 dark:text-white"
          >
            {{ project.title }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mt-2">
            {{ project.subtitle }}
          </p>
        </div>
        <!-- Image -->
        <div class="md:w-1/2">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

// Import image thumbnails
import dashboardaqms from "@/assets/AQMS/dashboardaqms.png";
import adminhomescola1 from "@/assets/scola/adminhomescola1.jpg";
import home from "@/assets/shopee/home.png";
import rentspace from "@/assets/rentspace/SS3.png";
import landingpage1 from "@/assets/eduwork/landingpage1.jpeg";
import aqmswqmsDashboard from "@/assets/aqms2/aqms2.jpg";

const router = useRouter();

const projects = [
  {
    title: "AQMS Dashboard",
    subtitle: "Real-time monitoring system for air quality.",
    image: dashboardaqms,
    slug: "aqms",
    // bg: "bg-[#d9eafe]",
  },
  {
    title: "School Management System",
    subtitle: "Full CRUD dashboard for system administrators.",
    image: adminhomescola1,
    slug: "scola",
    // bg: "bg-[#e4d9fb]",
  },
  {
    title: "Parcel Tracking UI",
    subtitle: "Modern interface for tracking parcel deliveries.",
    image: home,
    slug: "admin-panel",
    // bg: "bg-[#fff6e5]",
  },
  {
    title: "Rent Space App",
    subtitle:
      "A web platform for browsing, booking, and managing shared workspaces.",
    image: rentspace,
    slug: "rent-space",
    // bg: "bg-green-50",
  },
  {
    slug: "aqms-wqms",
    title: "AQMS & WQMS Dashboard UI",
    subtitle:
      "User interface for environmental monitoring in IoT applications.",
    image: aqmswqmsDashboard,
    // bg: "bg-blue-50",
  },
  {
    title: "Eduwork",
    subtitle: "Responsive, modern layout for product presentation.",
    image: landingpage1,
    slug: "landing-page",
    // bg: "bg-[#e0f7ff]",
  },
];

function goToDetail(slug) {
  router.push(`/projects/${slug}`);
}
</script>

<style scoped>
.outline-text {
  color: transparent;
  font-weight: 700;
  -webkit-text-stroke: 1px #000;
}

.dark .outline-text {
  -webkit-text-stroke: 1px #fff;
}
</style>
