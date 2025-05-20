<template>
  <section class="min-h-screen px-6 py-16 text-center">
    <!-- Hero Section -->
    <div class="max-w-3xl mx-auto">
      <h1
        class="text-5xl md:text-6xl font-light leading-tight text-black dark:text-white"
      >
        Hi, I'm
        <span
          class="bg-[#ffe3b3] dark:bg-[#facc15] px-2 font-bold text-black dark:text-gray-900"
        >
          Laila
        </span>
      </h1>

     <h2 class="mt-6 text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap justify-center gap-2">
  <span class="text-black dark:text-white">I</span>

  <span class="outline-text bg-transparent px-2">
    CODE, DESIGN,
  </span>

  <span class="text-black dark:text-white">&</span>

  <span class="outline-text bg-transparent px-2">
    WRITE
  </span>
</h2>

      <p class="mt-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
        Fullstack Developer (frontend-focused) passionate about building clean,
        functional interfaces. Exploring UI/UX. Fast learner, problem solver,
        and tech & design enthusiast.
      </p>
    </div>

    <!-- Section Divider -->
    <div class="mt-20 max-w-3xl mx-auto">
      <div class="text-sm tracking-wide text-gray-400 uppercase mb-2">
        My Recent Work
      </div>
    </div>

    <!-- Project Blocks -->
    <div class="space-y-10 mt-10">
      <div
        v-for="project in projects"
        :key="project.title"
        @click="goToDetail(project.slug)"
        class="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl cursor-pointer hover:shadow-xl transition group"
        :class="project.bg"
      >
        <!-- Text -->
        <div class="md:w-1/2 p-8 flex flex-col justify-center text-left">
          <h3
            class="text-2xl font-semibold group-hover:underline text-gray-700"
          >
            {{ project.title }}
          </h3>
          <p class="text-gray-700 mt-2">{{ project.subtitle }}</p>
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
    bg: "bg-[#d9eafe]",
  },
  {
    title: "School Management System",
    subtitle: "Full CRUD dashboard for system administrators.",
    image: adminhomescola1,
    slug: "scola",
    bg: "bg-[#e4d9fb]",
  },
  {
    title: "Parcel Tracking UI",
    subtitle: "Modern interface for tracking parcel deliveries.",
    image: home,
    slug: "admin-panel",
    bg: "bg-[#fff6e5]",
  },
  // {
  //   title: "Landing Page",
  //   subtitle: "Responsive, modern layout for product presentation.",
  //   image: landingpage,
  //   slug: "landing-page",
  //   bg: "bg-[#fdf4ff]",
  // },
  {
    title: "Rent Space App",
    subtitle:
      "A web platform for browsing, booking, and managing shared workspaces.",
    image: rentspace,
    slug: "rent-space",
    bg: "bg-green-50",
  },
  {
    slug: "aqms-wqms",
    title: "AQMS & WQMS Dashboard UI",
    subtitle:
      "User interface for environmental monitoring in IoT applications.",
    image: aqmswqmsDashboard, // <- make sure you imported the correct image
    bg: "bg-blue-50", // or a soft gray/blue tone matching the UI
    description:
      "A simple dashboard interface designed to monitor both Air and Water Quality data in real-time. Built for an IoT course project using Vue.js and Chart.js, the system visualizes sensor input like PM2.5, CO2, humidity, and water level. It was built in one week with a focus on clarity and minimalism.",
    tools: "Vue.js, Chart.js, Tailwind CSS",
    highlights: [
      "Realtime charts for air pollutants and climate metrics",
      "Dynamic pie chart for water level",
      "Responsive layout for monitoring dashboards",
    ],
  },
  {
    title: "Eduwork",
    subtitle: "Responsive, modern layout for product presentation.",
    image: landingpage1,
    slug: "landing-page",
    bg: "bg-[#e0f7ff]",
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
